import "./SupportCards.css";
import { FaComments, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function SupportCards() {
  return (
    <div className="support-cards">

      <div className="support-card">
        <FaComments className="support-icon" />
        <h3>Live Chat</h3>
        <p>Chat instantly with our support team.</p>
        <button>Start Chat</button>
      </div>

      <div className="support-card">
        <FaEnvelope className="support-icon" />
        <h3>Email Support</h3>
        <p>Get help through email assistance.</p>
        <button>Send Email</button>
      </div>

      <div className="support-card">
        <FaPhoneAlt className="support-icon" />
        <h3>Call Support</h3>
        <p>Speak directly with our experts.</p>
        <button>Call Now</button>
      </div>

    </div>
  );
}

export default SupportCards;