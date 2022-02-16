from typing import Generic, TypeVar, Type, Optional

from sqlalchemy.orm import Session
from sqlalchemy.orm.exc import NoResultFound

from app.db.base import Base
from app.db.models import Users, Friends, Groups

ModelType = TypeVar("ModelType", bound=Base)


class CRUDBase(Generic[ModelType]):
    def __init__(self, model: Type[ModelType]) -> None:
        self.model = model

    def create(self, db_session: Session, *, obj_in: Type[ModelType]) -> ModelType:
        db_session.add(obj_in)
        db_session.commit()
        db_session.refresh(obj_in)
        return obj_in

    def get(self, db_session: Session, id: int) -> Optional[ModelType]:
        return db_session.query(self.model).filter(self.model.id == id).first()

    def get_multi(
        self,
        db_session: Session,
        *,
        skip: int = 0,
        limit: int = 20,
        desc: bool = True,
    ) -> list:
        desc = -1 if desc else 1
        return db_session.query(self.model).offset(skip).limit(limit).all()[::desc]


class CRUDUser(CRUDBase[Users]):
    def __init__(self, model: Type[ModelType], friend_model: Friends) -> None:
        self.friend_model = friend_model
        super().__init__(model)

    def get_by_username(self, db_session: Session, username: str) -> Optional[Users]:
        return db_session.query(self.model).filter(self.model.username == username).first()

    def get_friends(self, db_session: Session, user_id: int) -> list:
        # idがuser_idにある場合
        query1 = db_session\
            .query(self.friend_model.friend_id)\
            .filter(self.friend_model.user_id == user_id)
        # idがfriend_idにある場合
        query2 = db_session\
            .query(self.friend_model.user_id)\
            .filter(self.friend_model.friend_id == user_id)

        # 合併する
        friend_id_list = query1.union(query2).all()

        return [self.get(db_session, friend_id[0]) for friend_id in friend_id_list]

    def add_friend(self, db_session: Session, user_id: int, friend_id: int) -> None:
        # 自分を友達に追加しようとした場合
        if user_id == friend_id:
            raise ValueError("user_id and friend_id is same")

        user = self.get(db_session, user_id)
        friend = self.get(db_session, friend_id)
        # 該当のuserが存在しない場合
        if not (user and friend):
            raise NoResultFound("User or Friend not found")

        # すでに友達の場合
        friends = self.get_friends(db_session, user_id)
        if friend in friends:
            return friends

        # 友達に追加
        if user_id > friend_id:
            # 重複追加を防ぐ
            user_id, friend_id = friend_id, user_id
        friend_in = self.friend_model(user_id=user_id, friend_id=friend_id)
        db_session.add(friend_in)
        db_session.commit()

        return self.get_friends(db_session, user_id)


class CRUDGroups(CRUDBase[Groups]):
    ...


user = CRUDUser(Users, Friends)
group = CRUDGroups(Groups)
