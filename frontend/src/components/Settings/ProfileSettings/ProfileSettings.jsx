import "./ProfileSettings.css";
import { FaUserCircle } from "react-icons/fa";

function ProfileSettings() {
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
          placeholder="Aryan Shaw"
        />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="aryan@gmail.com"
        />
      </div>

      <div className="input-group">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="+91 9876543210"
        />
      </div>

      <button className="save-btn">
        Save Changes
      </button>

    </div>
  );
}

export default ProfileSettings;