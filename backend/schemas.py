from pydantic import BaseModel
from datetime import datetime
from decimal import Decimal

class TransactionCreate(BaseModel):
    recipient: str
    amount: Decimal
    purpose: str
    notes: str

    user_id: int
    password: str


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
    user_id:int
    amount: Decimal
    password:str
class UserRegister(BaseModel):
    full_name: str
    email: str
    phone_number: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str