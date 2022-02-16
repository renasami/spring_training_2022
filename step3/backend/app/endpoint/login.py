from fastapi import APIRouter, Depends, WebSocket
from sqlalchemy.orm import Session

from app.db import crud
from app.db.base import get_db
from app.db.models import Users as DBUser
from app.endpoint.schemas import LoginUser
from app.security import auth

router = APIRouter()


@router.get('', response_model=LoginUser)
def login(
    current_user: DBUser = Depends(auth),
    db: Session = Depends(get_db),
):

    current_user.friends = crud.user.get_friends(db, current_user.id)
    return current_user


@router.websocket('/ws_connect')
def ws_connect(websocket: WebSocket, current_user: DBUser = Depends(auth)):
    websocket.accept()
    websocket.send_text(f'Hello {current_user.username}!')
    while True:
        message = websocket.receive_text()
        print(message)
        websocket.send_text(message)
