from fastapi import APIRouter, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm.exc import NoResultFound
import json

from app.endpoint.login import ws_manager
from app.db import crud
from app.db.base import get_db
from app.db.models import Users as DBUser, Messages as DBMessage, GroupsMessages as DBGroupMessage
from app.security import auth
from app.endpoint.schemas import ReceivePersonalMessage, SendPersonalMessage, ReceiveGroupMessage, SendGroupMessage, DetailedGroup

router = APIRouter()


@router.post('/send_personal_chat')
async def send_personal_message(
    received_msg: ReceivePersonalMessage,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(auth),
):

    msg_in = DBMessage(**received_msg.dict(), sender_id=current_user.id)
    try:
        db_msg = crud.message.create(db, obj_in=msg_in)
    except IntegrityError:
        raise HTTPException(status_code=404, detail='user not found')

    send_msg = {"personal_message": SendPersonalMessage.from_orm(db_msg)}
    # wsでメッセージを送る、ログインしていない場合は何もしない
    if received_msg.receiver_id in ws_manager.active_connections.keys():
        await ws_manager.send_personal_message(
            json.dumps(jsonable_encoder(send_msg)),
            send_msg['personal_message'].receiver_id,
        )
 
    print(ws_manager.active_connections)

    return 'Succeed'


@router.get('/personal_chat_history')
def get_personal_chat_history(
    receiver_id: int,
    skip: int = 0,
    limit: int = 20,
    desc: bool = True,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(auth),
):

    receiver = crud.user.get(db, receiver_id)
    if receiver is None:
        raise HTTPException(status_code=404, detail='user not found')

    return crud.message.get_chat_messages(
        db,
        sender_id=current_user.id,
        receiver_id=receiver_id,
        skip=skip,
        limit=limit,
        desc=desc,
    )


@router.post('/send_group_chat')
async def send_group_message(
    received_msg: ReceiveGroupMessage,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(auth),
):

    msg_in = DBGroupMessage(**received_msg.dict(), sender_id=current_user.id)
    try:
        group = crud.group.add_message(db, message_in=msg_in)
    except NoResultFound as e:
        raise HTTPException(status_code=404, detail=f'{e}')
    except ValueError as e:
        raise HTTPException(status_code=403, detail=f'{e}')

    db.refresh(msg_in)
    send_msg = {"group_message": SendGroupMessage.from_orm(msg_in)}
    member_id_set = set([member.id for member in group.members])
    # グループメンバーの集合とログインしているユーザーの集合の和集合を作る
    for user_id in member_id_set & set(ws_manager.active_connections.keys()):
        await ws_manager.send_personal_message(
            json.dumps(jsonable_encoder(send_msg)),
            user_id,
        )

    return 'Succeed'


@router.get("/get_group_with_chat_histroy", response_model=DetailedGroup)
def get_group_info(
    group_id: int,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(auth),
):
    group = crud.group.get(db, id=group_id)

    # ユーザーがグループに所属していない場合
    # グループが存在しない場合は404を返す
    if not group or current_user not in group.members:
        raise HTTPException(status_code=404, detail="Group not found or not in group")

    return group
