import { FaSearch, FaUserAlt } from "react-icons/fa";
import "./Header.css";
import {
  IoIosNotifications,
  IoIosArrowDropdownCircle
} from "react-icons/io";
function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-left">
          <div className="welcome-text">
            <h2>Welcome Back, Aryan 👋</h2>
            <p>Manage your finances efficiently.</p>
          </div>
          <div className="date">5th June 2026</div>
        </div>
        <div className="header-right">
          <div className="search-bar">
            <FaSearch></FaSearch>
            <input type="text" placeholder="Search...." />
          </div>
          <div className="notification-icon">
            <IoIosNotifications />
            
          </div>
          <div className="profile-section">
            <div className="avatar">
              <FaUserAlt />
              <span>Aryan Shaw</span>
            </div>
            <div className="dropdown">
              <IoIosArrowDropdownCircle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;