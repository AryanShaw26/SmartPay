import "./Login.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-header">

          <h1>
            Smart<span>Pay</span>
          </h1>

          <h2>Welcome Back</h2>

          <p>
            Login to access your wallet and transactions.
          </p>

        </div>

        <form className="login-form">

          <div className="input-group">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Email Address"
            />

          </div>

          <div className="input-group">

            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="Password"
            />

          </div>

          <div className="remember-forgot">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="/forgot-password">
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <div className="login-footer">

          Don't have an account?

          <Link to ="/register">
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;