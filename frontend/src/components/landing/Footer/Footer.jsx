import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>
            Smart<span>Pay</span>
          </h2>

          <p>
            Fast, secure and intelligent
            digital payments.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <h3>Connect</h3>

          <div className="social-icons">

            <FaGithub />
            <FaLinkedin />
            <FaTwitter />

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 SmartPay. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;