import "./QuickActions.css";
import { Link } from "react-router-dom";
import {
  FaQrcode,
  FaPlusCircle,
  FaPaperPlane,
  FaEllipsisH,
} from "react-icons/fa";

function ActionCard({ icon, title }) {
  return (
    <div className="action-card">
      <div className="action-icon">{icon}</div>

      <div className="action-title">{title}</div>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="quick-actions">
      <div className="actions-header">
        <h3>Quick Actions</h3>
      </div>

      <div className="actions-grid">
        <ActionCard icon={<FaQrcode />} title="Scan QR" />
        <Link to="/add-money">
          <ActionCard icon={<FaPlusCircle />} title="Add Money" />
        </Link>
        <Link to="/send-money">
          <ActionCard icon={<FaPaperPlane />} title="Send Money" />
        </Link>

        <ActionCard icon={<FaEllipsisH />} title="More" />
      </div>
    </div>
  );
}

export default QuickActions;
