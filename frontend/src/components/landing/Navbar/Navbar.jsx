import "./Navbar.css";
import logo from "../../../assets/logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="SmartPay Logo" className="navbar-logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home" className="active-link">
              Home
            </a>
          </li>
          <li>
            <a href="*features">Features</a>
          </li>
          <li>
            <a href="HowItWorks">HowItWorks</a>
          </li>
          <li>
            <a href="AboutUs">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
