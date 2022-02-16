import logging

from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware

from app.db.base import session
from app.endpoint.routing import root_router

logging.basicConfig(level=logging.DEBUG)

app = FastAPI()
app.include_router(root_router)


@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    response: Response = Response("Internal server error", status_code=500)
    try:
        request.state.db = session()
        print("Get DB session")
        response = await call_next(request)

    finally:
        request.state.db.close()
        print("Close DB session")
    return response


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
