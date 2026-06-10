import "./RecentTransactions.css";
import { useState, useEffect } from "react";
import axios from "axios";

function TransactionItem({
  name,
  date,
  amount,
  purpose,
}) {
  const isTopup =
    purpose === "Add Money";

  return (
    <div className="transaction-item">
      <div className="transaction-left">
        <div className="transaction-avatar">
          👤
        </div>

        <div className="transaction-details">
          <h4>{name}</h4>

          <p>
            {date
              ? new Date(date).toLocaleString(
                  "en-IN",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )
              : "N/A"}
          </p>
        </div>
      </div>

      <div
        className={`transaction-amount ${
          isTopup
            ? "credit"
            : "debit"
        }`}
      >
        {isTopup ? "+" : "-"}₹{amount}
      </div>
    </div>
  );
}

function RecentTransactions() {
  const [transactions, setTransactions] =
    useState([]);

  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:8000/transactions"
      )
      .then((response) => {

        const recentTransactions =
          response.data
            .sort(
              (a, b) =>
                new Date(b.date) -
                new Date(a.date)
            )
            .slice(0, 5);

        setTransactions(
          recentTransactions
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="transactions-card">
      <div className="transactions-header">
        <h3 className="hover-underline">
          Recent Transactions
        </h3>

        <span className="view-all">
          View All
        </span>
      </div>

      <div className="transactions-list">

        {transactions.length === 0 ? (
          <p
            style={{
              color: "white",
            }}
          >
            No Transactions Found
          </p>
        ) : (
          transactions.map(
            (transaction) => (
              <TransactionItem
                key={transaction.id}
                name={
                  transaction.recipient
                }
                date={
                  transaction.date
                }
                amount={
                  transaction.amount
                }
                purpose={
                  transaction.purpose
                }
              />
            )
          )
        )}

      </div>
    </div>
  );
}

export default RecentTransactions;