import logging
from typing import List

from fastapi import FastAPI, Body, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import requests

from app import config

app = FastAPI()
logging.basicConfig(level=logging.DEBUG)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

active_ws_connections: List[WebSocket] = []


@app.websocket('/chat')
async def chat(websocket: WebSocket):
    await websocket.accept()
    logging.getLogger("fastapi").debug("    WebSocket connection accepted")
    # 接続中のclientを保持
    active_ws_connections.append(websocket)

    # headersの中のnicknameを取得
    # ない場合はunknown_{ipアドレス}にする
    if 'nickname' in websocket.headers.keys():
        nickname = websocket.headers.get('nickname')
    else:
        nickname = f'unknown_{websocket.client.host}'

    logging.getLogger("fastapi").debug(f"   nickname: {nickname}")
    try:
        while True:
            data = await websocket.receive_json()
            data['nickname'] = nickname
            logging.getLogger("fastapi").debug(f"   data: {data}")
            # 全てのclientに送信
            # 形は{ "nickname": "nickname",　"message": "contents" }
            for connection in active_ws_connections:
                await connection.send_json(data)
    except WebSocketDisconnect:
        active_ws_connections.remove(websocket)


@app.post('/talk')
async def get_talk(query: str = Body(..., embed=True)):

    api_url = 'https://api.a3rt.recruit.co.jp/talk/v1/smalltalk'
    form = {
        'apikey': (None, config.RECRUIT_API_KEY),
        'query': (None, query),
    }

    res = requests.post(api_url, files=form)

    res_json = res.json()

    return res_json


@app.get('/')
async def root():
    return {'message': 'Hello World'}
