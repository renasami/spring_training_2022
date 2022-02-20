from typing import List
from datetime import datetime

from pydantic import BaseModel


class User(BaseModel):
    id: int
    username: str

    class Config:
        orm_mode = True


class UserCreate(BaseModel):
    username: str
    password: str


class ReceivePersonalMessage(BaseModel):
    datetime: datetime
    receiver_id: int
    message: str


class SendPersonalMessage(ReceivePersonalMessage):
    id: int
    sender_id: int

    class Config:
        orm_mode = True


class Group(BaseModel):
    id: int
    name: str
    members: List[User]

    class Config:
        orm_mode = True


class GroupMessage(BaseModel):
    id: int
    datetime: datetime
    group_id: int
    sender_id: int
    message: str

    class Config:
        orm_mode = True


class DetailedGroup(Group):
    messages: List[GroupMessage]


class ReceiveGroupMessage(BaseModel):
    datetime: datetime
    group_id: int
    message: str


class SendGroupMessage(ReceiveGroupMessage):
    id: int
    sender_id: int

    class Config:
        orm_mode = True


class LoginUser(BaseModel):
    id: int
    username: str
    friends: List[User]
    groups: List[Group]

    class Config:
        orm_mode = True
