// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const LoginPage = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login data:', { ...formData, rememberMe });
    
//     // Simulate successful login
//     onLogin();
//     navigate('/home');
//   };

//   return (
//     <div className="marine-theme-page">
//       <div className="auth-container">
//         <div className="auth-box">
//           {/* Header Section */}
//           <div className="auth-header">
//             <h2>Welcome Back</h2>
//             <p>Sign in to your account to continue</p>
//           </div>

//           {/* Form Section */}
//           <form onSubmit={handleSubmit} className="auth-form">
//             <div className="form-group">
//               <label htmlFor="email">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//                 className="form-input"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 required
//                 className="form-input"
//               />
//             </div>

//             <div className="form-options">
//               <label className="checkbox-container">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//                 <span className="checkmark"></span>
//                 Remember me
//               </label>
//               <Link to="/forgot-password" className="forgot-link">
//                 Forgot Password?
//               </Link>
//             </div>
//             <button type="submit" className="auth-btn primary">
//               Sign In
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="divider">
//             <span>or continue with</span>
//           </div>

//           {/* Social Login */}
//           <div className="social-login">
//             <button type="button" className="social-btn google">
//               Continue with Google
//             </button>
//           </div>

//           {/* Footer */}
//           <div className="auth-footer">
//             <p>
//               Don't have an account?{' '}
//               <Link to="/register" className="auth-link">
//                 Create account
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// src/pages/LoginPage.js

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const LoginPage = ({ onLogin }) => {
//   const [formData, setFormData] = React.useState({
//     email: '',
//     password: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // 1. Get the stored user data from localStorage
//     const storedUserData = localStorage.getItem(formData.email);

//     if (storedUserData) {
//       // 2. Parse the stored data from a string back into an object
//       const user = JSON.parse(storedUserData);

//       // 3. Check if the entered password matches the stored password
//       if (user.password === formData.password) {
//         alert('✅ Login successful!');
//         onLogin(); // Update the authenticated state in App.js
//         navigate('/user'); // Navigate to the user's profile page
//       } else {
//         alert('❌ Incorrect password. Please try again.');
//       }
//     } else {
//       alert('❌ No account found with this email address.');
//     }
//   };

//   return (
//     <div className="marine-theme-page">
//       <div className="auth-container">
//         <div className="auth-box">
//           <div className="auth-header">
//             <h2>Welcome Back</h2>
//             <p>Sign in to your account to continue</p>
//           </div>
//           <form onSubmit={handleSubmit} className="auth-form">
//             <div className="form-group">
//               <label htmlFor="email">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//                 className="form-input"
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 required
//                 className="form-input"
//               />
//             </div>
//             <div className="form-options">
//               {/* Remember me checkbox (functionality not implemented) */}
//               <Link to="/forgot-password" className="forgot-link">
//                 Forgot Password?
//               </Link>
//             </div>
//             <button type="submit" className="auth-btn primary">
//               Sign In
//             </button>
//           </form>
//           <div className="auth-footer">
//             <p>
//               Don't have an account?{' '}
//               <Link to="/register" className="auth-link">
//                 Create account
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

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