import "./Register.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phoneNumber, setPhoneNumber] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert(
        "Passwords do not match"
      );

      return;
    }

    try {
      const response =
        await axios.post(
          "http://127.0.0.1:8000/register",
          {
            full_name: fullName,
            email,
            phone_number: phoneNumber,
            password,
          }
        );

      alert(
        response.data.message
      );

      if (
        response.data.message ===
        "Registration Successful"
      ) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);

      alert(
        "Registration Failed"
      );
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1>
            Smart<span>Pay</span>
          </h1>

          <h2>Create Account</h2>

          <p>
            Join SmartPay and
            experience secure
            digital payments.
          </p>
        </div>

        <form
          className="register-form"
          onSubmit={handleSubmit}
        >
          <div className="input-group">
            <FaUser className="input-icon" />

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) =>
                setFullName(
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="input-group">
            <FaPhone className="input-icon" />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(
                  e.target.value
                )
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
                setPassword(
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              required
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

          <Link to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;