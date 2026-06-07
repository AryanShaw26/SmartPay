import "./BeneficiaryCard.css";
import { FaUserCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function BeneficiaryCard({name,email}) {
  return (
    <div className="beneficiary-card">

      <div className="beneficiary-info">

        <div className="beneficiary-avatar">
          <FaUserCircle />
        </div>

        <div className="beneficiary-details">

          <h3>{name}</h3>

          <p>{email}</p>

          <div className="beneficiary-status">
            <FaCheckCircle />
            <span>Verified</span>
          </div>

        </div>

      </div>

      <Link to="/send-money" className="beneficiary-actions">
        <button className="send-money-btn">
          Send Money
        </button>
      </Link>

    </div>
  );
}

export default BeneficiaryCard;