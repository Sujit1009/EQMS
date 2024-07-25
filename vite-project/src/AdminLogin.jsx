import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import './Admin'
const AdminLogin = () => {
  return (
    <div className="App">
      <div className="signup-container">
        <h2>Admin Login</h2>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              required
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
            />
          </div>
          <button type="submit">
          <Link to="/Admin">
             Login
          </Link>
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
