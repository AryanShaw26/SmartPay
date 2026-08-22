import "./Header.css";

import {
  IoIosArrowDropdownCircle,
} from "react-icons/io";

import { FaUserAlt, FaRobot } from "react-icons/fa";

import {
  useEffect,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

function Header() {

  const [userName, setUserName] =
    useState("User");

  const navigate = useNavigate();

  useEffect(() => {

    const storedUser =
      localStorage.getItem("full_name");

    if (storedUser) {
      setUserName(storedUser);
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

      {/* LEFT SIDE */}

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


      {/* RIGHT SIDE */}

      <div className="header-right">

        {/* AI FINANCIAL ASSISTANT */}

        <button
          className="ai-assistant-button"
          onClick={() => navigate("/ai-assistant")}
        >

          <FaRobot />

          <span>
            AI Financial Assistant
          </span>

        </button>


        {/* PROFILE */}

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