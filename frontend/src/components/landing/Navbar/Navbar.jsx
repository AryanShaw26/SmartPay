import "./Navbar.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="SmartPay Logo" className="navbar-logo" />
          <p className="logo-text"><span className="line">---</span>Smarter Payment Better Life <span className="line">---</span></p>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home" className="active-link">
              Home
            </a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#how-it-works">HowItWorks</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>

          <Link to="/register">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
