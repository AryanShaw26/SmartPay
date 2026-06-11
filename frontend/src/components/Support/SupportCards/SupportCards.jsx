import "./SupportCards.css";
import { FaEnvelope } from "react-icons/fa";

function SupportCards() {
  return (
    <div className="support-cards">

      <div className="support-card">

        <FaEnvelope className="support-icon" />

        <h3>Email Support</h3>

        <p>
          Need help? Contact the SmartPay support team directly.
        </p>

        <a
          href="mailto:smartpay.support@gmail.com?subject=SmartPay Support Request"
          className="email-support-btn"
        >
          Send Email
        </a>

      </div>

    </div>
  );
}

export default SupportCards;