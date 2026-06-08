import "./NotificationSettings.css";
import { useState } from "react";

function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [transactionAlerts, setTransactionAlerts] = useState(true);
  const [promotionalUpdates, setPromotionalUpdates] = useState(false);
  const [securityAlerts, setSecurityAlerts] = useState(true);

  const handleSave = () => {
    console.log({
      emailNotifications,
      transactionAlerts,
      promotionalUpdates,
      securityAlerts,
    });
  };

  return (
    <div className="notification-settings">

      <div className="notification-header">
        <h2>Notification Settings</h2>
      </div>

      <div className="notification-options">

        <div className="notification-item">
          <input
            type="checkbox"
            id="email-notifications"
            checked={emailNotifications}
            onChange={() =>
              setEmailNotifications(!emailNotifications)
            }
          />
          <label htmlFor="email-notifications">
            Email Notifications
          </label>
        </div>

        <div className="notification-item">
          <input
            type="checkbox"
            id="transaction-alerts"
            checked={transactionAlerts}
            onChange={() =>
              setTransactionAlerts(!transactionAlerts)
            }
          />
          <label htmlFor="transaction-alerts">
            Transaction Alerts
          </label>
        </div>

        <div className="notification-item">
          <input
            type="checkbox"
            id="promotional-updates"
            checked={promotionalUpdates}
            onChange={() =>
              setPromotionalUpdates(!promotionalUpdates)
            }
          />
          <label htmlFor="promotional-updates">
            Promotional Updates
          </label>
        </div>

        <div className="notification-item">
          <input
            type="checkbox"
            id="security-alerts"
            checked={securityAlerts}
            onChange={() =>
              setSecurityAlerts(!securityAlerts)
            }
          />
          <label htmlFor="security-alerts">
            Security Alerts
          </label>
        </div>

      </div>

      <button
        className="save-notification-btn"
        onClick={handleSave}
      >
        Save Preferences
      </button>

    </div>
  );
}

export default NotificationSettings;