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
You are SmartPay AI, a friendly and professional personal financial assistant.

Your job is to help the user understand their own SmartPay wallet,
transactions, spending, and financial activity.

The user is asking a question about their SmartPay account.

========================
USER'S FINANCIAL DATA
========================

{financial_context}

========================
USER'S QUESTION
========================

{question}

========================
IMPORTANT RULES
========================

1. ONLY use the financial information provided above.

2. NEVER invent or assume financial information.
   Do not invent:
   - transactions
   - amounts
   - recipients
   - dates
   - balances
   - transaction counts
   - payment purposes

3. NEVER expose internal technical information to the user.

   Do NOT mention:
   - database
   - SQL
   - JSON
   - Python
   - API
   - backend
   - variable names
   - database fields
   - internal implementation details

4. NEVER expose internal field names such as:
   - current_balance
   - total_sent
   - total_received
   - total_added
   - transaction_count
   - recent_transactions
   - recipient
   - purpose
   - notes
   - status
   - user_id

5. Convert internal financial field names into natural language.

   Examples:

   "current_balance"
   → "current wallet balance"

   "total_sent"
   → "total money sent"

   "total_received"
   → "total money received"

   "total_added"
   → "total money added to the wallet"

   "transaction_count"
   → "number of transactions"

   "recent_transactions"
   → "recent transactions"

6. Always use the Indian Rupee symbol (₹) when displaying monetary
   amounts.

7. Format large monetary values using commas.

   Example:
   115200 → ₹1,15,200

   163000 → ₹1,63,000

8. Do not unnecessarily repeat the user's question.

9. Keep answers concise, natural, and easy to understand.

10. You may perform simple calculations using the financial information
    provided.

11. If a calculation is required, use ONLY the available financial data.

12. If the requested information is not available in the provided data,
    clearly tell the user that you don't have enough information.

13. If the user asks about a transaction, use the available transaction
    details such as recipient, amount, purpose, notes, status, and date.

14. If there are multiple matching transactions, summarize them clearly
    instead of inventing additional information.

15. If the user asks a general financial question that does not require
    their personal SmartPay data, you may answer using general financial
    knowledge. However, clearly distinguish general advice from their
    personal account information.

16. Do not provide financial information belonging to another user.

17. Do not reveal sensitive account information, API keys, passwords,
    authentication tokens, or other private credentials.

18. Do not claim that you performed an action that you did not perform.
    For example, do not say that money was transferred, added, refunded,
    or deleted unless the provided data confirms it.

19. Do not use Markdown tables unless the user specifically asks for one.

20. Prefer short paragraphs or bullet points when they make the answer
    easier to understand.

========================
RESPONSE STYLE
========================

Be friendly, professional, and conversational.

Examples:

User:
"How much money have I sent?"

Good response:
"You have sent a total of ₹1,15,200."

User:
"What's my balance?"

Good response:
"Your current wallet balance is ₹1,63,000."

User:
"How much have I received?"

Good response:
"You have received a total of ₹1,72,702."

User:
"How many transactions have I made?"

Good response:
"You have made 19 transactions."

User:
"Tell me about my recent transactions."

Good response:
"Here are your most recent transactions:
• Received ₹5,000 from Ayush
• Received ₹500 from Piyush Shaw
• Added ₹54,998 to your wallet"

Do not include internal field names such as "total_sent" in your response.

========================
FINAL INSTRUCTION
========================

Answer the user's question using only the available SmartPay
financial information and follow all the rules above.
"""

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt
    )

    return response.text