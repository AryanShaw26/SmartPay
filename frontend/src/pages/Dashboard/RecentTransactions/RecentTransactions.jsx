import "./RecentTransactions.css";

function TransactionItem({ name, date, amount, type, logo }) {
  return (
    <div className="transaction-item">
      <div className="transaction-left">
        <div className="transaction-avatar">
          {logo}
        </div>

        <div className="transaction-details">
          <h4>{name}</h4>
          <p>{date}</p>
        </div>
      </div>

      <div
        className={`transaction-amount ${
          type === "credit" ? "credit" : "debit"
        }`}
      >
        {amount}
      </div>
    </div>
  );
}

function RecentTransactions() {
  return (
    <div className="transactions-card">
      <div className="transactions-header">
        <h3 className="hover-underline">Recent Transactions</h3>

        <span className="view-all">
          View All
        </span>
      </div>

      <div className="transactions-list">

        <TransactionItem
          name="Amazon"
          date="12 May 2024, 10:30 AM"
          amount="-₹1,250"
          type="debit"
          logo="🛒"
        />

        <TransactionItem
          name="Raj Sharma"
          date="12 May 2024, 09:15 AM"
          amount="+₹2,000"
          type="credit"
          logo="👤"
        />

        <TransactionItem
          name="Netflix"
          date="11 May 2024, 08:45 PM"
          amount="-₹649"
          type="debit"
          logo="🎬"
        />

        <TransactionItem
          name="Airtel Recharge"
          date="11 May 2024, 06:20 PM"
          amount="-₹299"
          type="debit"
          logo="📱"
        />
        <TransactionItem
        name="AmazonPrime"
        date="5 June 2026, 5:48 AM"
        amount='-1499'
        type="debit"
        logo=""></TransactionItem>
      </div>
    </div>
  );
}

export default RecentTransactions;