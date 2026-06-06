import "./SecuritySettings.css";

function SecuritySettings() {
  return (
    <div className="security-settings">

      <div className="security-header">
        <h2>Security Settings</h2>
      </div>

      <div className="input-group">
        <label>Current Password</label>
        <input
          type="password"
          placeholder="Enter Current Password"
        />
      </div>

      <div className="input-group">
        <label>New Password</label>
        <input
          type="password"
          placeholder="Enter New Password"
        />
      </div>

      <div className="input-group">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm New Password"
        />
      </div>

      <button className="update-password-btn">
        Update Password
      </button>

    </div>
  );
}

export default SecuritySettings;