import "./SecuritySettings.css";
import { useState } from "react";

function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdate = () => {
    console.log({
      currentPassword,
      newPassword,
      confirmPassword,
    });
  };

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
          value={currentPassword}
          onChange={(e) =>
            setCurrentPassword(e.target.value)
          }
        />
      </div>

      <div className="input-group">
        <label>New Password</label>
        <input
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(e.target.value)
          }
        />
      </div>

      <div className="input-group">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
        />
      </div>

      <button
        className="update-password-btn"
        onClick={handleUpdate}
      >
        Update Password
      </button>

    </div>
  );
}

export default SecuritySettings;