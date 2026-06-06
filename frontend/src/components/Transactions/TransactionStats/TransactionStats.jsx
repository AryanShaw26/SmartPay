import "./TransactionStats.css";
import {
  FaExchangeAlt,
  FaArrowUp,
  FaArrowDown,
  FaCheckCircle,
} from "react-icons/fa";

function TransactionStats() {
  return (
    <div className="stats-container">

      {/* Total Transactions */}

      <div className="stat-card">

        <div className="stat-icon">
          <FaExchangeAlt />
        </div>

        <div className="stat-content">
          <h3>Total Transactions</h3>
          <h1>125</h1>
          <p>+12 this week</p>
        </div>

      </div>

      {/* Money Sent */}

      <div className="stat-card">

        <div className="stat-icon">
          <FaArrowUp />
        </div>

        <div className="stat-content">
          <h3>Money Sent</h3>
          <h1>₹45,000</h1>
          <p>+8.5% this month</p>
        </div>

      </div>

      {/* Money Received */}

      <div className="stat-card">

        <div className="stat-icon">
          <FaArrowDown />
        </div>

        <div className="stat-content">
          <h3>Money Received</h3>
          <h1>₹32,500</h1>
          <p>+5.2% this month</p>
        </div>

      </div>

      {/* Success Rate */}

      <div className="stat-card">

        <div className="stat-icon">
          <FaCheckCircle />
        </div>

        <div className="stat-content">
          <h3>Success Rate</h3>
          <h1>98%</h1>
          <p>122 / 125 Successful</p>
        </div>

      </div>

    </div>
  );
}

export default TransactionStats;