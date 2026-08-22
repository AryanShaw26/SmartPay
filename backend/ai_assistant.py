import os

from dotenv import load_dotenv
from google import genai

from sqlalchemy.orm import Session

from models import Transaction, Wallet


# Load environment variables
load_dotenv()


# ==========================
# GEMINI CONFIGURATION
# ==========================

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise RuntimeError(
        "GEMINI_API_KEY environment variable is not set"
    )

client = genai.Client(
    api_key=GEMINI_API_KEY
)


# ==========================
# FINANCIAL DATA
# ==========================

def get_financial_summary(user_id: int, db: Session):

    wallet = (
        db.query(Wallet)
        .filter(Wallet.user_id == user_id)
        .first()
    )

    transactions = (
        db.query(Transaction)
        .filter(Transaction.user_id == user_id)
        .order_by(Transaction.date.desc())
        .all()
    )

    balance = float(wallet.balance) if wallet else 0

    total_sent = sum(
        float(t.amount)
        for t in transactions
        if t.purpose == "Send Money"
    )

    total_received = sum(
        float(t.amount)
        for t in transactions
        if t.purpose == "Received Money"
    )

    total_added = sum(
        float(t.amount)
        for t in transactions
        if t.purpose == "Add Money"
    )

    return {
        "balance": balance,
        "total_sent": total_sent,
        "total_received": total_received,
        "total_added": total_added,
        "transaction_count": len(transactions),
    }

def get_financial_context(user_id: int, db: Session):

    wallet = (
        db.query(Wallet)
        .filter(Wallet.user_id == user_id)
        .first()
    )

    transactions = (
        db.query(Transaction)
        .filter(Transaction.user_id == user_id)
        .order_by(Transaction.date.desc())
        .all()
    )

    balance = float(wallet.balance) if wallet else 0

    total_sent = sum(
        float(t.amount)
        for t in transactions
        if t.purpose == "Send Money"
    )

    total_received = sum(
        float(t.amount)
        for t in transactions
        if t.purpose == "Received Money"
    )

    total_added = sum(
        float(t.amount)
        for t in transactions
        if t.purpose == "Add Money"
    )

    recent_transactions = []

    for transaction in transactions[:10]:

        recent_transactions.append({
            "recipient": transaction.recipient,
            "amount": float(transaction.amount),
            "purpose": transaction.purpose,
            "notes": transaction.notes,
            "status": transaction.status,
            "date": str(transaction.date)
        })

    return {
        "current_balance": balance,
        "total_sent": total_sent,
        "total_received": total_received,
        "total_added": total_added,
        "transaction_count": len(transactions),
        "recent_transactions": recent_transactions
    }

# ==========================
# GEMINI TEST
# ==========================

def ask_gemini(question: str) -> str:
    try:
        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=question
        )

        return response.text

    except Exception as e:
        print("GEMINI ERROR:", repr(e))
        raise

def ask_financial_assistant(
    question: str,
    financial_context: dict
) -> str:

    prompt = f"""
You are SmartPay's Financial Assistant.

You help users understand their own SmartPay wallet
and transaction information.

IMPORTANT RULES:

1. Only use the financial information provided below.
2. Never invent transactions, balances, recipients, dates,
   or amounts.
3. If the requested information is not available in the
   provided data, clearly say that you don't have enough
   information.
4. Do not make claims about transactions that are not
   present in the data.
5. Keep your response clear, concise, and easy to understand.
6. You may perform simple calculations using the provided
   numbers.
7. Do not expose technical details such as database queries,
   API keys, or internal implementation.

USER'S FINANCIAL DATA:

{financial_context}

USER QUESTION:

{question}

Answer the user's question based only on the provided
SmartPay financial data.
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    return response.text