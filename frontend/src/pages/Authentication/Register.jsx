import "./Register.css";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">

      <div className="register-card">

        <div className="register-header">

          <h1>
            Smart<span>Pay</span>
          </h1>

          <h2>Create Account</h2>

          <p>
            Join SmartPay and experience secure digital payments.
          </p>

        </div>

        <form className="register-form">

          <div className="input-group">

            <FaUser className="input-icon" />

            <input
              type="text"
              placeholder="Full Name"
            />

          </div>

          <div className="input-group">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Email Address"
            />

          </div>

          <div className="input-group">

            <FaPhone className="input-icon" />

            <input
              type="tel"
              placeholder="Phone Number"
            />

          </div>

          <div className="input-group">

            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="Password"
            />

          </div>

          <div className="input-group">

            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="Confirm Password"
            />

          </div>

          <button
            type="submit"
            className="register-btn"
          >
            Create Account
          </button>

        </form>

        <div className="register-footer">

          Already have an account?

          <Link href="/login">
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;