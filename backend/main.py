from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import SessionLocal, engine, Base
from models import Transaction, Wallet
from schemas import (
    TransactionCreate,
    AddMoneyRequest,
)

from models import User
from schemas import UserRegister
from schemas import UserLogin
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

    wallet = (
        db.query(Wallet)
        .first()
    )

    if wallet.balance < transaction.amount:
        return {
            "message":
            "Insufficient Balance"
        }

    wallet.balance -= transaction.amount

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

@app.get("/wallet")
def get_wallet(
    db: Session = Depends(get_db)
):

    wallet = (
        db.query(Wallet)
        .first()
    )

    return wallet

@app.post("/add-money")
def add_money(
    data: AddMoneyRequest,
    db: Session = Depends(get_db)
):

    wallet = (
        db.query(Wallet)
        .first()
    )

    wallet.balance += data.amount

    db.commit()

    db.refresh(wallet)

    return wallet

@app.post("/register")
def register_user(
    user: UserRegister,
    db: Session = Depends(get_db)
):

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if existing_user:
        return {
            "message":
            "User already exists"
        }

    new_user = User(
        full_name=user.full_name,
        email=user.email,
        phone_number=user.phone_number,
        password=user.password
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {
        "message":
        "Registration Successful"
    }

@app.post("/login")
def login_user(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    existing_user = (
        db.query(User)
        .filter(User.email == user.email)
        .first()
    )

    if not existing_user:
        return {
            "message":
            "User Not Found"
        }

    if existing_user.password != user.password:
        return {
            "message":
            "Invalid Password"
        }

    return {
        "message":
        "Login Successful",
        "user_id":
        existing_user.id
    }