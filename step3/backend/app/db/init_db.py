import json
from typing import List

from sqlalchemy.engine import Engine
from sqlalchemy.orm import Session

from app.db.base import Base, engine, session
from app.db import models  # noqa: F401
from app.db import crud


def create_tables(base, engine: Engine) -> None:
    base.metadata.create_all(bind=engine)


def insert_demo_users(session: Session, users: List) -> None:
    for user in users:
        user_in = models.Users(**user)
        crud.users.create(session, obj_in=user_in)


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
