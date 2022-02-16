from typing import List

from fastapi import APIRouter, Depends, Body
from sqlalchemy.orm import Session

from app.db import crud
from app.db.base import get_db
from app.db.models import Users as DBUser
from app.endpoint.schemas import LoginUser, User, UserCreate
from app.security import auth

router = APIRouter()


@router.post('/register', response_model=User)
def register(
    user_in: UserCreate,
    db: Session = Depends(get_db),
):
    db_user = DBUser(**user_in.dict())
    return crud.user.create(db, obj_in=db_user)


@router.get('/login', response_model=LoginUser)
def login(
    current_user: DBUser = Depends(auth),
    db: Session = Depends(get_db),
):

    current_user.friends = crud.user.get_friends(db, current_user.id)
    return current_user


@router.post('/add_friend', response_model=List[User])
def add_friend(
    friend_id: int = Body(..., embed=True),
    current_user: DBUser = Depends(auth),
    db: Session = Depends(get_db),
):

    return crud.user.add_friend(db, current_user.id, friend_id)


@router.get('/get_friends', response_model=List[User])
def get_friends(
    current_user: DBUser = Depends(auth),
    db: Session = Depends(get_db),
):

    return crud.user.get_friends(db, current_user.id)
