import "./ProfileSettings.css";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

function ProfileSettings() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSave = () => {
    console.log({
      fullName,
      email,
      phoneNumber,
    });
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
          placeholder="Aryan Shaw"
          value={fullName}
          onChange={(e) =>
            setFullName(e.target.value)
          }
        />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="aryan@gmail.com"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
      </div>

      <div className="input-group">
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="+91 9876543210"
          value={phoneNumber}
          onChange={(e) =>
            setPhoneNumber(e.target.value)
          }
        />
      </div>

      <button
        className="save-btn"
        onClick={handleSave}
      >
        Save Changes
      </button>

    </div>
  );
}

export default ProfileSettings;