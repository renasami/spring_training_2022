from fastapi import APIRouter
from app.endpoint import chat_bot, open_chat, user

root_router = APIRouter()
root_router.include_router(chat_bot.router, prefix='/chat_bot', tags=['chat_bot'])
root_router.include_router(open_chat.router, prefix='/open_chat', tags=['open_chat'])
root_router.include_router(user.router, prefix='/user', tags=['user'])
