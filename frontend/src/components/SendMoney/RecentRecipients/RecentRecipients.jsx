import "./RecentRecipients.css";
import { FaUserCircle } from "react-icons/fa";

function RecentRecipients() {
  return (
    <div className="recent-recipients">

      <div className="recipients-header">
        <h2>Recent Recipients</h2>
      </div>

      <div className="recipients-list">

        <div className="recipient-item">
          <FaUserCircle />
          <span>Raj Sharma</span>
        </div>

        <div className="recipient-item">
          <FaUserCircle />
          <span>Aman Gupta</span>
        </div>

        <div className="recipient-item">
          <FaUserCircle />
          <span>Priya Singh</span>
        </div>

        <div className="recipient-item">
          <FaUserCircle />
          <span>Rohit Das</span>
        </div>

      </div>

    </div>
  );
}

export default RecentRecipients;