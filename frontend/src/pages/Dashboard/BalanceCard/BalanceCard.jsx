import { FaEye } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import "./BalanceCard.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BalanceCard() {
  const [balance, setBalance] = useState(50000);

  const [transactionsCount, setTransactionsCount] = useState(0);

  const [totalSent, setTotalSent] = useState(0);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    axios
      .get(`http://127.0.0.1:8000/wallet/${userId}`)
      .then((response) => {
        setBalance(response.data.balance);
      })
      .catch((error) => {
        console.log("Error fetching wallet:", error);
      });

    axios
      .get(`http://127.0.0.1:8000/transactions/${userId}`)
      .then((response) => {
        const transactions = response.data;

        setTransactionsCount(transactions.length);

        const totalSent = transactions
          .filter((transaction) => transaction.purpose === "Send Money")
          .reduce((sum, transaction) => sum + Number(transaction.amount), 0);

        setTotalSent(total);
      })
      .catch((error) => {
        console.log("Error fetching transactions:", error);
      });
  }, []);

  return (
    <div className="balance-card">
      <div className="balance-header">
        <div className="title">
          <h3>Total Balance</h3>
        </div>

        <div className="eye-icon">
          <FaEye />
        </div>
      </div>

      <div className="balance-amount">
        <h1>
          ₹
          {Number(balance).toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h1>
      </div>

      <div className="balance-actions">
        <Link to="/add-money" className="add-money-btn">
          <IoIosAddCircleOutline />
          <span>Add Money</span>
        </Link>

        <Link to="/send-money" className="send-money-btn">
          <IoIosSend />
          <span>Send Money</span>
        </Link>
      </div>

      <div className="balance-summary">
        <div className="summary-box">
          <div className="summary-title">Transactions</div>

          <div className="summary-value">{transactionsCount}</div>
        </div>

        <div className="summary-box">
          <div className="summary-title">Total Sent</div>

          <div className="summary-value">
            ₹{Number(totalSent).toLocaleString("en-IN")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
