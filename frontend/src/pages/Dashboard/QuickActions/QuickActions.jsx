import "./QuickActions.css";

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

        <ActionCard
          icon={<FaQrcode />}
          title="Scan QR"
        />

        <ActionCard
          icon={<FaPlusCircle />}
          title="Add Money"
        />

        <ActionCard
          icon={<FaPaperPlane />}
          title="Send Money"
        />

        <ActionCard
          icon={<FaEllipsisH />}
          title="More"
        />

      </div>

    </div>
  );
}

export default QuickActions;