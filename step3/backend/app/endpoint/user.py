from typing import List

from fastapi import APIRouter, Depends, Body, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app.db import crud
from app.db.base import get_db
from app.db.models import Users as DBUser
from app.endpoint.schemas import User, UserCreate
from app.security import auth

router = APIRouter()


@router.post('/register', response_model=User)
def register(
    user_in: UserCreate,
    db: Session = Depends(get_db),
):
    db_user = DBUser(**user_in.dict())
    return crud.user.create(db, obj_in=db_user)


@router.post('/add_friend', response_model=List[User])
def add_friend(
    friend_id: int = Body(..., embed=True),
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(auth),
):
    try:
        friends = crud.user.add_friend(db, current_user.id, friend_id)
    except ValueError as e:
        # 自分で定義したエラー
        raise HTTPException(status_code=400, detail=f'{e}')
    except IntegrityError:
        # 存在したいuserを挿入しようとした場合、このエラー吐く
        raise HTTPException(status_code=404, detail='User or Friend not found')

    return friends


@router.get('/get_friends', response_model=List[User])
def get_friends(
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(auth),
):

    return crud.user.get_friends(db, current_user.id)
