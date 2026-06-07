import { FaEye } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import "./BalanceCard.css";
import { Link } from "react-router-dom";
function BalanceCard() {
  return (
    <>
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
          <h1>₹ 24,680.50</h1>
        </div>
        <div className="balance-actions">
          <Link to= "/add-money" className="add-money-btn">
            <IoIosAddCircleOutline />
            <span>Add Money</span>
          </Link>
          <Link to="/send-money" className="send-money-btn">
            <IoIosSend />
            <span>Send Money</span>
          </Link>
        </div>
        <div className="balance-summary">
          <div className="income-box">
            <div className="income-title">Income</div>
            <div className="income-value">+₹42,500</div>
          </div>
          <div className="expense-box">
            <div className="expense-title">Expenses</div>
            <div className="expense-value">-₹17,820</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BalanceCard;
