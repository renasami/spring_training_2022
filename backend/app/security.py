from fastapi import HTTPException, status, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from passlib.context import CryptContext
from slowapi import Limiter
from slowapi.util import get_remote_address
from sqlalchemy.orm import Session

from app.db.base import get_db

security = HTTPBasic()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_password_hash(password):
    return pwd_context.hash(password)


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def auth(db: Session = Depends(get_db), credentials: HTTPBasicCredentials = Depends(security)):
    from app.db import crud

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


# rate limiter
limiter = Limiter(key_func=get_remote_address)
