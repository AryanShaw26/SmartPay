from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float
from sqlalchemy import DateTime

from datetime import datetime

from database import Base


class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)

    recipient = Column(String)

    amount = Column(Float)

    purpose = Column(String)

    notes = Column(String)

    status = Column(String)

    date = Column(
        DateTime,
        default=datetime.utcnow
    )