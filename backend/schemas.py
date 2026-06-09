from pydantic import BaseModel
from datetime import datetime


class TransactionCreate(BaseModel):
    recipient: str
    amount: float
    purpose: str
    notes: str


class TransactionResponse(TransactionCreate):
    id: int
    status: str
    date: datetime

    class Config:
        from_attributes = True

class WalletResponse(BaseModel):
    id: int
    balance: float

    class Config:
        from_attributes = True


class AddMoneyRequest(BaseModel):
    amount: float

class UserRegister(BaseModel):
    full_name: str
    email: str
    phone_number: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str