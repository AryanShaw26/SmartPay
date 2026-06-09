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


class Wallet(Base):
    __tablename__ = "wallet"

    id = Column(Integer, primary_key=True, index=True)

    balance = Column(
        Float,
        default=50000
    )

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String)

    email = Column(String, unique=True)

    phone_number = Column(String, unique=True)

    password = Column(String)