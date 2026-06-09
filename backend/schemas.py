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