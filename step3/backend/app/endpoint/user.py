from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from sqlalchemy.orm import Session

from app.db import crud
from app.db.base import get_db
from app.endpoint.schemas import LoginUser
from app.security import verify_password

router = APIRouter()

security = HTTPBasic()


@router.get('/login', response_model=LoginUser)
def login(credentials: HTTPBasicCredentials = Depends(security), db: Session = Depends(get_db)):
    username = credentials.username
    password = credentials.password

    user = crud.user.get_by_username(db, username)

    if user is None or not verify_password(password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='ユーザ名かパスワードが間違っています',
            headers={"WWW-Authenticate": "Basic"},
        )

    user.friends = crud.user.get_friends(db, user.id)

    return user
