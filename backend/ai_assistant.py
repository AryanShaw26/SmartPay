from sqlalchemy.orm import Session
from models import Transaction, Wallet


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