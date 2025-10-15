import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

// --- Step 1: Import All Your Components ---
// Make sure these file paths match your folder structure.
// This assumes you have a 'components' folder for Navbar and a 'pages' folder for the rest.
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DonationPage from './pages/DonationPage';
import UserPage from './pages/UserPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  // --- Step 2: Manage Authentication State ---
  // This state determines if a user is logged in or not.
  // It starts as 'false' (logged out).
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // This function is passed to the LoginPage component.
  // When login is successful, LoginPage will call this function to update the state here.
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // This function is passed to the Navbar component for the logout button.
  const handleLogout = () => {
    setIsAuthenticated(false);
    // In a real application, you would also clear any stored tokens here.
  };

  // --- Step 3: Define the Application Structure and Routes ---
  return (
    <Router>
      {/* The Navbar is placed outside the <Routes> so it appears on every page. */}
      {/* We pass the authentication state and functions to it as props. */}
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      <main>
        {/* The <Routes> component holds all the individual page routes. */}
        <Routes>
          {/* --- Public Routes (Visible to everyone) --- */}

          {/* Homepage Route */}
          <Route path="/home" element={<HomePage />} />

          {/* Login Page Route */}
          {/* We pass the handleLogin function as a prop. */}
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

          {/* Registration Page Route */}
          <Route path="/register" element={<RegisterPage />} />

          {/* Donation Page Route */}
          <Route path="/donate" element={<DonationPage />} />

          {/* Forgot Password Route */}
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />


          {/* --- Private/Protected Route --- */}

          {/* User Profile Route */}
          {/* This route uses a check:
              - If isAuthenticated is true, it shows the UserPage.
              - If isAuthenticated is false, it uses <Navigate> to redirect the user to the /login page.
          */}
          <Route
            path="/user"
            element={isAuthenticated ? <UserPage /> : <Navigate to="/login" />}
          />


          {/* --- Redirects for Default/Fallback --- */}

          {/* Redirects the base URL ("/") to the "/home" page. */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* A catch-all route for any other URL that doesn't match. */}
          {/* This also redirects to the homepage. */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;