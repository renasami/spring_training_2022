from fastapi import APIRouter, Depends, Body, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.orm.exc import NoResultFound

from app.db import crud
from app.db.base import get_db
from app.db.models import Users as DBUser, Groups as DBGroup
from app.endpoint.schemas import Group, DetailedGroup
from app.security import auth

router = APIRouter()


@router.get("/get_with_chat_histroy", response_model=DetailedGroup)
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


@router.post("/create", response_model=Group)
def create(
    group_name: str = Body(...),
    join_this_group: bool = Body(False),
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(auth),
):
    group_in = DBGroup(name=group_name)
    if join_this_group:
        group_in.members.append(current_user)
    return crud.group.create(db, obj_in=group_in)


@router.post('/join', response_model=Group)
def join_group(
    group_id: int = Body(..., embed=True),
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(auth),
):
    try:
        return crud.group.add_member(db, group_id=group_id, user_id=current_user.id)
    except NoResultFound as e:
        raise HTTPException(status_code=404, detail=f'{e}')
