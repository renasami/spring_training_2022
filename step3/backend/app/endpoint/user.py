from fastapi import APIRouter, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from sqlalchemy.orm import Session

from app.db import crud
from app.db.base import get_db
from app.endpoint.schemas import LoginUser, User, UserCreate
from app.security import auth

router = APIRouter()

security = HTTPBasic()


@router.post('/register', response_model=User)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    user = crud.user.create(db, user=user_in)
    return user


@router.get('/login', response_model=LoginUser)
def login(
    credentials: HTTPBasicCredentials = Depends(security),
    db: Session = Depends(get_db),
):

    user = auth(credentials, db)
    user.friends = crud.user.get_friends(db, user.id)

    return user
