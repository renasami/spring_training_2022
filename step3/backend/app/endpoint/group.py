from fastapi import APIRouter, Depends, Body, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.orm.exc import NoResultFound

from app.db import crud
from app.db.base import get_db
from app.db.models import Users as DBUser
from app.endpoint.schemas import Group
from app.security import auth

router = APIRouter()


@router.post('/join_group', response_model=Group)
def join_group(
    group_id: int = Body(..., embed=True),
    db: Session = Depends(get_db),
    current_user: DBUser = Depends(auth),
):
    try:
        return crud.group.add_member(db, group_id=group_id, user_id=current_user.id)
    except NoResultFound as e:
        raise HTTPException(status_code=404, detail=f'{e}')
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"{type(e)}: {e}")
