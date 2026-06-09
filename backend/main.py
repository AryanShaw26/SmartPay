from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import SessionLocal, engine, Base
from models import Transaction
from schemas import TransactionCreate

# Create tables if they don't exist
Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database Dependency
def get_db():
    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()


# Home Route
@app.get("/")
def home():
    return {
        "message": "SmartPay API Running"
    }


# Get All Transactions
@app.get("/transactions")
def get_transactions(
    db: Session = Depends(get_db)
):
    transactions = db.query(Transaction).all()

    return transactions


# Create Transaction
@app.post("/transactions")
def create_transaction(
    transaction: TransactionCreate,
    db: Session = Depends(get_db)
):

    new_transaction = Transaction(
        recipient=transaction.recipient,
        amount=transaction.amount,
        purpose=transaction.purpose,
        notes=transaction.notes,
        status="Success"
    )

    db.add(new_transaction)

    db.commit()

    db.refresh(new_transaction)

    return new_transaction