import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is imported

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const loginData = {
        email: formData.email,
        password: formData.password,
      };

      // Send a POST request to the backend login endpoint
      // The backend will verify the credentials
      await axios.post("http://localhost:5000/api/users/login", loginData);
      
      // If the axios call is successful, the login was valid
      alert('✅ Login successful!');
      onLogin(); // This function updates the state in App.js
      navigate('/user'); // Redirect to the user's profile page

    } catch (err) {
      // This block runs if the backend returns an error (like "Invalid credentials")
      console.error("Login error:", err.response ? err.response.data : err.message);
      if (err.response && err.response.data.msg) {
        alert(`❌ Login Failed: ${err.response.data.msg}`);
      } else {
        alert('❌ An unexpected error occurred during login.');
      }
    }
  };

  return (
    <div className="marine-theme-page">
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Sign in to your account to continue</p>
          </div>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="form-input"
              />
            </div>
            <div className="form-options">
              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="auth-btn primary">
              Sign In
            </button>
          </form>
          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/register" className="auth-link">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;