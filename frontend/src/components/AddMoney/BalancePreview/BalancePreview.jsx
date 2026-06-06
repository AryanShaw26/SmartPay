import "./BalancePreview.css";
import { FaEye } from "react-icons/fa";

function BalancePreview() {
  return (
    <div className="balance-preview">

      <div className="balance-top">

        <div>
          <h3>Current Wallet Balance</h3>
          <p>Available Funds</p>
        </div>

        <div className="eye-icon">
          <FaEye />
        </div>

      </div>

      <div className="balance-amount">
        ₹24,680.50
      </div>

      <div className="balance-footer">

        <div className="balance-growth">
          +12.5% from last month
        </div>

        <div className="balance-update">
          Updated Just Now
        </div>

      </div>

    </div>
  );
}

export default BalancePreview;