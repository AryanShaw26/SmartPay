import "./BeneficiaryCard.css";
import { FaUserCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

function BeneficiaryCard() {
  return (
    <div className="beneficiary-card">

      <div className="beneficiary-info">

        <div className="beneficiary-avatar">
          <FaUserCircle />
        </div>

        <div className="beneficiary-details">

          <h3>Raj Sharma</h3>

          <p>rajsharma@gmail.com</p>

          <div className="beneficiary-status">
            <FaCheckCircle />
            <span>Verified</span>
          </div>

        </div>

      </div>

      <div className="beneficiary-actions">
        <button className="send-money-btn">
          Send Money
        </button>
      </div>

    </div>
  );
}

export default BeneficiaryCard;