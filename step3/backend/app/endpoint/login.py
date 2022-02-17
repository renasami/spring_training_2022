from typing import Dict, List

from fastapi import APIRouter, Depends, WebSocket, HTTPException, WebSocketDisconnect
import json
from sqlalchemy.orm import Session

from app.db import crud
from app.db.base import get_db, session
from app.db.models import Users as DBUser
from app.endpoint.schemas import LoginUser
from app.security import auth, security

router = APIRouter()


@router.get('', response_model=LoginUser)
def login(
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(auth),
):

    current_user.friends = crud.user.get_friends(db, current_user.id)
    return current_user


class ConnectionManager:
    def __init__(self):
        self.active_connections: Dict[int, WebSocket] = {}

    async def connect(self, websocket: WebSocket, user_id: int):
        await websocket.accept()
        if user_id in self.active_connections:
            raise HTTPException(status_code=4001, detail='Already connected')
        self.active_connections[user_id] = websocket

    def disconnect(self, user_id: int):
        self.active_connections.pop(user_id)

    async def send_personal_message(self, message: str, user_id: int):
        await self.active_connections[user_id].send_text(message)

    async def broadcast(self, message: str, scope: List[int] = None):
        if scope is None:
            scope = self.active_connections.keys()

        for connection in scope:
            await self.active_connections[connection].send_text(message)


ws_manager = ConnectionManager()


@router.websocket('/ws_connect')
async def ws_connect(websocket: WebSocket, basic: str):
    # wsフロントからではheaderを送れないので
    # クエリパラメータでkeyを受け取って、バックでheaderに入れる
    key, value = 'Authorization', f'Basic {basic}'
    websocket.headers._list.append((key.lower().encode("latin-1"), value.encode("latin-1")))
    with session() as db:
        current_user = auth(db=db, credentials=await security(websocket))

    await ws_manager.connect(websocket, current_user.id)
    try:
        while True:
            await websocket.receive_text()
            mes = json.dumps({"err": "you should't send any message using ws"})
            await ws_manager.send_personal_message(mes, current_user.id)
    except WebSocketDisconnect:
        ws_manager.disconnect(current_user.id)
