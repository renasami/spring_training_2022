import json
from typing import List

from sqlalchemy.engine import Engine
from sqlalchemy.orm import Session

from app.db.base import Base, engine, session
from app.db import models
from app.db import crud


def create_tables(base, engine: Engine) -> None:
    base.metadata.create_all(bind=engine)


def insert_demo_users(session: Session, users: List) -> None:
    for user in users:
        user_in = models.Users(**user)
        crud.user.create(session, obj_in=user_in)


def inster_demo_friends(session: Session, friends: List) -> None:
    for friend in friends:
        crud.user.add_friend(session, user_id=friend["user_id"], friend_id=friend["friend_id"])


def inster_demo_messages(session: Session, messages: List) -> None:
    for message in messages:
        crud.message.create(session, obj_in=models.Messages(**message))


def inster_demo_groups(session: Session, groups: List) -> None:
    for group in groups:
        crud.group.create(session, obj_in=models.Groups(**group))


if __name__ == "__main__":
    create_tables(Base, engine)
    # 以下のコマンドでDBの中身を確認できる
    # docker exec -it step3-db-1 mysql --database=myjchatapp --user=mariadb --password=secret
    # show tables;

    # demoデータを読み込む
    with open("/app/db/demo_data.json", "r") as fp:
        demo_data = json.load(fp)

    # demoデータをDBに挿入する
    with session() as db_session:
        insert_demo_users(db_session, demo_data['users'])
        inster_demo_friends(db_session, demo_data['friends'])
        inster_demo_groups(db_session, demo_data['groups'])
        inster_demo_messages(db_session, demo_data['messages'])
