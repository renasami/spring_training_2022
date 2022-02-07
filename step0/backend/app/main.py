from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
import requests

from app import config

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


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
