from sqlalchemy.engine import Engine

from app.db.base import Base, engine
from app.db import models  # noqa: F401


def create_tables(base, engine: Engine):
    base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    create_tables(Base, engine)
    # 以下のコマンドでDBの中身を確認できる
    # docker exec -it step3-db-1 mysql --database=myjchatapp --user=mariadb --password=secret
    # show tables;
