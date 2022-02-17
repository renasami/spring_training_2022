from typing import Generic, TypeVar, Type, Optional

from sqlalchemy.orm import Session

from app.db.base import Base
from app.db.models import Users, Friends, Groups, Messages

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

        if user_id > friend_id:
            # 重複追加を防ぐ
            # ex) user_id = 1, friend_id = 2
            #    user_id = 2, friend_id = 1
            user_id, friend_id = friend_id, user_id
        friend_in = self.friend_model(user_id=user_id, friend_id=friend_id)
        db_session.merge(friend_in)
        db_session.commit()

        return self.get_friends(db_session, user_id)


class CRUDMessage(CRUDBase[Messages]):
    def get_chat_messages(
        self,
        db_session: Session,
        sender_id: int,
        receiver_id: int,
        *,
        skip: int = 0,
        limit: int = 20,
        desc: bool = True,
    ) -> list:
        '''
        skip: 何件目から取得するか
        limit: 取得する最大件数
        desc: 降順か昇順
        '''
        sended_msg = db_session\
            .query(self.model)\
            .filter(self.model.sender_id == sender_id)\
            .filter(self.model.receiver_id == receiver_id)
        received_msg = db_session\
            .query(self.model)\
            .filter(self.model.sender_id == receiver_id)\
            .filter(self.model.receiver_id == sender_id)

        order_by = self.model.datetime.desc() if desc else self.model.datetime.asc()
        return sended_msg.union(received_msg).order_by(order_by).offset(skip).limit(limit).all()


class CRUDGroups(CRUDBase[Groups]):
    ...


user = CRUDUser(Users, Friends)
group = CRUDGroups(Groups)
message = CRUDMessage(Messages)
