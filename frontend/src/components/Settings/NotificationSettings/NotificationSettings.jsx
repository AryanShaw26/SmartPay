import "./NotificationSettings.css";

function NotificationSettings() {
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
            defaultChecked
          />
          <label htmlFor="email-notifications">
            Email Notifications
          </label>
        </div>

        <div className="notification-item">
          <input
            type="checkbox"
            id="transaction-alerts"
            defaultChecked
          />
          <label htmlFor="transaction-alerts">
            Transaction Alerts
          </label>
        </div>

        <div className="notification-item">
          <input
            type="checkbox"
            id="promotional-updates"
          />
          <label htmlFor="promotional-updates">
            Promotional Updates
          </label>
        </div>

        <div className="notification-item">
          <input
            type="checkbox"
            id="security-alerts"
            defaultChecked
          />
          <label htmlFor="security-alerts">
            Security Alerts
          </label>
        </div>

      </div>

      <button className="save-notification-btn">
        Save Preferences
      </button>

    </div>
  );
}

export default NotificationSettings;