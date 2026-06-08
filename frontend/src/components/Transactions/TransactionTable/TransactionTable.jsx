import "./TransactionTable.css";

function TransactionTable({ transactions }) {
  return (
    <div className="table-container">

      <h1>Transaction History</h1>

      <div className="transaction-details">
        <p>Date</p>
        <p>Recipient</p>
        <p>Amount</p>
        <p>Type</p>
        <p>Status</p>
      </div>

      {transactions.map((transaction) => (
        <div
          className="transaction-row"
          key={transaction.id}
        >
          <span>{transaction.date}</span>

          <span>{transaction.recipient}</span>

          <span>₹{transaction.amount}</span>

          <span>{transaction.type}</span>

          <span
            className={
              transaction.status === "Success"
                ? "success"
                : transaction.status === "Pending"
                ? "pending"
                : "failed"
            }
          >
            {transaction.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default TransactionTable;