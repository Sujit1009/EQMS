import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './index.css';
import './Login';
import './AdminLogin';
import './Welcome';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3004/login", {
        email,
        password,
      });

      if (response.data.message === "Success") {
        if (response.data.role === "admin") {
          navigate("/Admin"); // Navigate to admin page
        } else {
          navigate("/welcome", { state: { email: response.data.email } }); // Navigate to welcome page with email
        }
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="App">
      <div className="signup-container">
        <h2>Login</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn register-btn">
            Login
          </button>
          <button type="submit">
            <Link to="/AdminLogin">
              Admin Login
            </Link>
          </button>
        </form>
        <div className="login-link">
          <p>Don't Have an Account</p>
          <Link to="/register" className="new-button">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
