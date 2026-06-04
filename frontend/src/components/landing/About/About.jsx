import "./About.css";

import {
  FaBullseye,
  FaEye,
  FaShieldAlt
} from "react-icons/fa";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-header">

        <span className="about-tag">
          ABOUT SMARTPAY
        </span>

        <h2>
          Building The Future Of
          <span> Digital Payments</span>
        </h2>

        <p>
          SmartPay is a modern fintech platform designed
          to make digital payments secure, fast, and
          accessible for everyone.
        </p>

      </div>

      <div className="about-grid">

        {/* Mission */}

        <div className="about-card">

          <div className="about-icon">
            <FaBullseye />
          </div>

          <h3>Our Mission</h3>

          <p>
            To simplify financial transactions through
            innovative technology and seamless user
            experiences.
          </p>

        </div>

        {/* Vision */}

        <div className="about-card">

          <div className="about-icon">
            <FaEye />
          </div>

          <h3>Our Vision</h3>

          <p>
            To become the most trusted and intelligent
            digital payment ecosystem for everyone.
          </p>

        </div>

        {/* Security */}

        <div className="about-card">

          <div className="about-icon">
            <FaShieldAlt />
          </div>

          <h3>Security First</h3>

          <p>
            Every transaction is protected with
            enterprise-grade security and encrypted
            infrastructure.
          </p>

        </div>

      </div>

      <div className="about-bottom">

        <h3>
          Why Choose SmartPay?
        </h3>

        <p>
          SmartPay combines modern payment technology,
          powerful analytics, QR-based transactions,
          secure authentication, and wallet management
          into a single platform. Our goal is to make
          managing money effortless while maintaining
          the highest standards of security and
          performance.
        </p>

      </div>

    </section>
  );
}

export default About;