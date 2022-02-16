import logging
from typing import List, Optional

from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter()

active_ws_connections: List[WebSocket] = []


@router.websocket('/')
async def chat(websocket: WebSocket, nickname: Optional[str] = None):
    await websocket.accept()
    logging.getLogger("fastapi").debug("    WebSocket connection accepted")
    # 接続中のclientを保持
    active_ws_connections.append(websocket)

    # クエリーの中のnicknameを取得
    # ない場合はunknown_{ipアドレス}にする
    if nickname is None:
        nickname = f'unknown_{websocket.client.host}'

    logging.getLogger("fastapi").debug(f"   nickname: {nickname}")
    try:
        while True:
            # { "message": "contents" }がbodyにある必要がある
            data = await websocket.receive_json()
            data['nickname'] = nickname
            logging.getLogger("fastapi").debug(f"   data: {data}")
            # 全てのclientに送信
            # 形は{ "nickname": "nickname",　"message": "contents" }
            for connection in active_ws_connections:
                await connection.send_json(data)
    except WebSocketDisconnect:
        active_ws_connections.remove(websocket)
