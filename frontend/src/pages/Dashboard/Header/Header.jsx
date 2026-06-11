import "./Header.css";

import {
  IoIosNotifications,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

import { FaUserAlt } from "react-icons/fa";

import {
  useEffect,
  useState,
} from "react";

function Header() {

  const [userName, setUserName] =
    useState("User");

  useEffect(() => {

    const storedUser =
      localStorage.getItem(
        "full_name"
      );

    if (storedUser) {

      setUserName(
        storedUser
      );

    }

  }, []);

  const today =
    new Date().toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  return (
    <div className="header-container">

      <div className="header-left">

        <div className="welcome-text">

          <h2>
            Welcome Back, {userName} 👋
          </h2>

          <p>
            Manage your finances efficiently.
          </p>

        </div>

        <span className="date">
          {today}
        </span>

      </div>

      <div className="header-right">

        <div className="notification-icon">
          <IoIosNotifications />
        </div>

        <div className="profile-section">

          <div className="avatar">

            <FaUserAlt />

            <span>
              {userName}
            </span>

          </div>

          <div className="dropdown">
            <IoIosArrowDropdownCircle />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Header;