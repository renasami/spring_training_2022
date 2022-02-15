import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.endpoint.routing import root_router

logging.basicConfig(level=logging.DEBUG)

app = FastAPI()
app.include_router(root_router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/')
async def root():
    return {'message': 'Hello World'}
