from fastapi import HTTPException, status
from fastapi.security import HTTPBasicCredentials
from passlib.context import CryptContext
from sqlalchemy.orm import Session

from app.db import crud

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_password_hash(password):
    return pwd_context.hash(password)


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def auth(credentials: HTTPBasicCredentials, db: Session):
    username = credentials.username
    password = credentials.password

    user = crud.user.get_by_username(db, username)

    if user is None or not verify_password(password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail='ユーザ名かパスワードが間違っています',
            headers={"WWW-Authenticate": "Basic"},
        )

    return user
