import requests
from fastapi import APIRouter, Body

from app import config

router = APIRouter()


@router.post('')
async def get_talk(query: str = Body(..., embed=True)):

    api_url = 'https://api.a3rt.recruit.co.jp/talk/v1/smalltalk'
    form = {
        'apikey': (None, config.RECRUIT_API_KEY),
        'query': (None, query),
    }

    res = requests.post(api_url, files=form)

    res_json = res.json()

    return res_json
