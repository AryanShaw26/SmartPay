import "./Login.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const response =
      await axios.post(
        "http://127.0.0.1:8000/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);

    if (
      response.data.message ===
      "Login Successful"
    ) {

      localStorage.setItem(
        "userName",
        response.data.full_name
      );

      localStorage.setItem(
        "userEmail",
        response.data.email
      );

      localStorage.setItem(
        "userId",
        response.data.user_id
      );

      navigate("/dashboard");
    } else {
      alert(response.data.message);
    }

  } catch (error) {

    console.log(error);

    alert(
      "Unable to login"
    );

  }
};

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

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#">
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

          <Link to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;