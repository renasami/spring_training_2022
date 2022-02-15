from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.db.base import Base


class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(256), nullable=False, unique=True)
    password = Column(String(256), nullable=False)

    groups = relationship('Groups', secondary="GroupsMembers", back_populates='users')


class Friends(Base):
    __tablename__ = 'friends'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False, primary_key=True)
    friend_id = Column(Integer, ForeignKey('users.id'), nullable=False, primary_key=True)


class Messages(Base):
    __tablename__ = 'messages'

    id = Column(Integer, primary_key=True, autoincrement=True)
    sender = Column(Integer, ForeignKey('users.id'), nullable=False, primary_key=True)
    receiver = Column(Integer, ForeignKey('users.id'), nullable=False, primary_key=True)
    message = Column(String(512), nullable=False)


class Groups(Base):
    __tablename__ = 'groups'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(256), nullable=False, unique=True)

    users = relationship('Users', secondary="GroupsMembers", back_populates='groups')
    message = relationship('GroupMessages')


class GroupsMembers(Base):
    __tablename__ = 'groups_members'

    id = Column(Integer, primary_key=True, autoincrement=True)
    group_id = Column(Integer, ForeignKey('groups.id'), nullable=False, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False, primary_key=True)


class GroupsMessages(Base):
    __tablename__ = 'groups_messages'

    id = Column(Integer, primary_key=True, autoincrement=True)
    group_id = Column(Integer, ForeignKey('groups.id'), nullable=False, primary_key=True)
    sender = Column(Integer, ForeignKey('users.id'), nullable=False, primary_key=True)
    message = Column(String(512), nullable=False)
