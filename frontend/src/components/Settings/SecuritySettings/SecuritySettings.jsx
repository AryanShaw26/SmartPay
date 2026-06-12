import "./SecuritySettings.css";
import { useState } from "react";
import axios from "axios";

function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdate = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");

      return;
    }

    try {
      const userId = localStorage.getItem("user_id");

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/change-password`,
        {
          user_id: userId,
          current_password: currentPassword,
          new_password: newPassword,
        },
      );

      alert(response.data.message);

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      alert(error.response?.data?.detail || "Password Update Failed");
    }
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
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>New Password</label>

        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Confirm Password</label>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button className="update-password-btn" onClick={handleUpdate}>
        Update Password
      </button>
    </div>
  );
}

export default SecuritySettings;
