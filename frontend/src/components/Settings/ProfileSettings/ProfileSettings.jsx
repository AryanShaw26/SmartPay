import "./ProfileSettings.css";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function ProfileSettings() {
  const [fullName, setFullName] = useState(
    localStorage.getItem("full_name") || "",
  );

  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const [currentPassword, setCurrentPassword] = useState("");

  const handleSave = async () => {
    try {
      const userId = localStorage.getItem("user_id");

      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-profile`,
        {
          user_id: userId,
          full_name: fullName,
          email: email,
          current_password: currentPassword,
        },
      );

      localStorage.setItem("full_name", fullName);

      localStorage.setItem("email", email);

      alert(response.data.message);

      window.location.reload();
    } catch (error) {
      alert(error.response?.data?.detail || "Update Failed");
    }
  };

  return (
    <div className="profile-settings">
      <div className="profile-header">
        <h2>Profile Settings</h2>
      </div>

      <div className="profile-avatar">
        <FaUserCircle />
      </div>

      <div className="input-group">
        <label>Full Name</label>

        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Current Password</label>

        <input
          type="password"
          placeholder="Verification Required"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}

export default ProfileSettings;
