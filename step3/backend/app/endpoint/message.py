from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.endpoint.login import ws_manager
from app.db import crud
from app.db.base import get_db
from app.db.models import Users as DBUser, Messages as DBMessage
from app.security import auth
from app.endpoint.schemas import ReceivePersonalMessage, SendPersonalMessage

router = APIRouter()


@router.post('/send_personal_chat')
async def message(
    received_msg: ReceivePersonalMessage,
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(auth),
):
    receiver = crud.user.get(db, received_msg.receiver_id)
    if receiver is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='user not found')

    send_msg = SendPersonalMessage(**received_msg.dict(), sender_id=current_user.id)
    # wsでメッセージをを送る、ログイン指定がない場合は何もしない
    if received_msg.receiver_id in ws_manager.active_connections.keys():
        await ws_manager.send_personal_message(send_msg.json(), receiver.id)

    msg_in = DBMessage(**send_msg.dict())
    crud.message.create(db, obj_in=msg_in)

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
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='user not found')

    return crud.message.get_chat_messages(
        db,
        sender_id=current_user.id,
        receiver_id=receiver_id,
        skip=skip,
        limit=limit,
        desc=desc,
    )
