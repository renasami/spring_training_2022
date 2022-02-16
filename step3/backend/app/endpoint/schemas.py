from typing import List

from pydantic import BaseModel


class User(BaseModel):
    id: int
    username: str

    class Config:
        orm_mode = True


class Group(BaseModel):
    id: int
    name: str
    members: List[User]

    class Config:
        orm_mode = True


class UserCreate(BaseModel):
    username: str
    password: str


class LoginUser(BaseModel):
    id: int
    username: str
    friends: List[User]
    groups: List[Group]

    class Config:
        orm_mode = True
