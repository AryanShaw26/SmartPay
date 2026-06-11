import "./TransactionTable.css";

function TransactionTable({
  transactions,
}) {
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

      {transactions.length === 0 ? (
        <div
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          No Transactions Found
        </div>
      ) : (
        transactions.map(
          (transaction) => {
            const isTopup =
              transaction.recipient ===
              "Wallet Topup";

            return (
              <div
                className="transaction-row"
                key={transaction.id}
              >
                <span>
                  {new Date(
                    transaction.date
                  ).toLocaleString(
                    "en-IN"
                  )}
                </span>

                <span>
                  {
                    transaction.recipient
                  }
                </span>

                <span
                  className={
                    isTopup
                      ? "credit"
                      : "debit"
                  }
                >
                  {isTopup
                    ? "+₹"
                    : "-₹"}
                  {transaction.amount}
                </span>

                <span>
                  {isTopup
                    ? "Credit"
                    : "Debit"}
                </span>

                <span className="success">
                  {
                    transaction.status
                  }
                </span>
              </div>
            );
          }
        )
      )}
    </div>
  );
}

export default TransactionTable;