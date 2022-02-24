from fastapi import Request
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from app import config

url = f'mysql+pymysql://{config.MARIADB_USER}:{config.MARIADB_PASSWORD}@{config.MARIADB_HOST}/{config.MARIADB_DB_NAME}'

# DBテーブルの基礎class
Base = declarative_base()
# DB接続用のclass
engine = create_engine(url, encoding='UTF-8', echo=True)

session = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db(request: Request):
    return request.state.db
