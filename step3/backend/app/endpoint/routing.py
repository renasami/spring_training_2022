from fastapi import APIRouter
from app.endpoint import chat_bot, open_chat, user, login, message, group

root_router = APIRouter()
root_router.include_router(chat_bot.router, prefix='/chat_bot', tags=['chat_bot'])
root_router.include_router(open_chat.router, prefix='/open_chat', tags=['open_chat'])
root_router.include_router(user.router, prefix='/user', tags=['user'])
root_router.include_router(login.router, prefix='/login', tags=['login'])
root_router.include_router(message.router, prefix='/message', tags=['message'])
root_router.include_router(group.router, prefix='/group', tags=['group'])
