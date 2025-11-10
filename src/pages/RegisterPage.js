// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     dateOfBirth: '',
//     gender: '',
//     country: '',
//     city: '',
//     password: ''
//   });
//   const [agreeToTerms, setAgreeToTerms] = useState(false);
//   const navigate = useNavigate();

//   const countries = [
//     'Select Country',
//     'United States',
//     'Canada',
//     'United Kingdom',
//     'Australia',
//     'Germany',
//     'France',
//     'Japan',
//     'India',
//     'Brazil',
//     'South Africa'
//   ];

//   const genders = [
//     'Select',
//     'Male',
//     'Female',
//     'Non-binary',
//     'Prefer not to say'
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!agreeToTerms) {
//       alert('⚠️ Please agree to the terms and conditions.');
//       return;
//     }

//     if (!formData.email || !formData.password) {
//       alert('⚠️ Email and Password are required.');
//       return;
//     }

//     try {
//       // Save all user data in localStorage (email as key)
//       localStorage.setItem(formData.email, JSON.stringify(formData));

//       alert('✅ Registration successful! You can now log in.');
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         dateOfBirth: '',
//         gender: '',
//         country: '',
//         city: '',
//         password: ''
//       });
//       setAgreeToTerms(false);
//       navigate('/login');
//     } catch (error) {
//       console.error('Registration error:', error);
//       alert('❌ Failed to save data locally.');
//     }
//   };

//   return (
//     <div className="marine-theme-page">
//       <div className="application-container">
//         <div className="application-box">
//           {/* Header Section */}
//           <div className="application-header">
//             <h1>Marine Conservation Volunteer Application</h1>
//             <p>Join our efforts to protect and sustain life below water</p>
//           </div>

//           {/* Form Section */}
//           <form onSubmit={handleSubmit} className="application-form">
//             <div className="application-section">
//               <h2 className="application-section-title">Personal Information</h2>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="firstName" className="required">First Name</label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="Enter your first name"
//                     required
//                     className="form-input"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="lastName" className="required">Last Name</label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Enter your last name"
//                     required
//                     className="form-input"
//                   />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="email" className="required">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     required
//                     className="form-input"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password" className="required">Password</label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Create a password"
//                     required
//                     className="form-input"
//                   />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="phone">Phone Number</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Enter your phone number"
//                     className="form-input"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="dateOfBirth">Date of Birth</label>
//                   <input
//                     type="date"
//                     id="dateOfBirth"
//                     name="dateOfBirth"
//                     value={formData.dateOfBirth}
//                     onChange={handleChange}
//                     className="form-input"
//                   />
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="gender">Gender</label>
//                   <select
//                     id="gender"
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     className="form-input"
//                   >
//                     {genders.map(gender => (
//                       <option key={gender} value={gender}>
//                         {gender}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="country" className="required">Country</label>
//                   <select
//                     id="country"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     required
//                     className="form-input"
//                   >
//                     {countries.map(country => (
//                       <option key={country} value={country}>
//                         {country}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="city">City</label>
//                 <input
//                   type="text"
//                   id="city"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   placeholder="Enter your city"
//                   className="form-input"
//                 />
//               </div>
//             </div>

//             {/* Terms and Conditions */}
//             <div className="terms-section">
//               <label className="checkbox-container terms-checkbox">
//                 <input
//                   type="checkbox"
//                   checked={agreeToTerms}
//                   onChange={(e) => setAgreeToTerms(e.target.checked)}
//                   required
//                 />
//                 <span className="checkmark"></span>
//                 <span>
//                   I agree to the{' '}
//                   <Link to="/terms" className="inline-link">
//                     Terms of Service
//                   </Link>{' '}
//                   and{' '}
//                   <Link to="/privacy" className="inline-link">
//                     Privacy Policy
//                   </Link>
//                 </span>
//               </label>
//             </div>

//             <div className="form-actions">
//               <button type="submit" className="auth-btn primary">
//                 Submit Application
//               </button>
//               <Link to="/login" className="auth-link back-link">
//                 Already have an account? Sign in
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

// src/pages/RegisterPage.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    country: '',
    city: '',
    password: ''
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  const countries = [
    'Select Country', 'United States', 'Canada', 'United Kingdom',
    'Australia', 'Germany', 'France', 'Japan', 'India', 'Brazil', 'South Africa'
  ];

  const genders = ['Select', 'Male', 'Female', 'Non-binary', 'Prefer not to say'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // This is the updated function that sends data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreeToTerms) {
      alert('⚠️ Please agree to the terms and conditions.');
      return;
    }

    // Basic validation to ensure required fields are not empty
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.country) {
      alert('⚠️ Please fill out all required fields.');
      return;
    }

    try {
      // Create the user object to send to the API
      // We only send the fields defined in our Mongoose schema
      const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      };

      // Send a POST request to our backend registration endpoint
      await axios.post("http://localhost:5000/api/users/register", newUser);

      alert('✅ Registration successful! You can now log in.');
      navigate('/login'); // Redirect to login page after successful registration

    } catch (err) {
      // This block runs if the API returns an error
      console.error('Registration error:', err.response ? err.response.data : err.message);
      
      // Display the specific error message from the backend (e.g., "email already exists")
      if (err.response && err.response.data.msg) {
        alert(`❌ Registration failed: ${err.response.data.msg}`);
      } else {
        alert('❌ An unexpected error occurred during registration.');
      }
    }
  };

  return (
    <div className="marine-theme-page">
      <div className="application-container">
        <div className="application-box">
          <div className="application-header">
            <h1>Marine Conservation Volunteer Application</h1>
            <p>Join our efforts to protect and sustain life below water</p>
          </div>

          <form onSubmit={handleSubmit} className="application-form">
            <div className="application-section">
              <h2 className="application-section-title">Personal Information</h2>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="required">First Name</label>
                  <input
                    type="text" id="firstName" name="firstName"
                    value={formData.firstName} onChange={handleChange}
                    placeholder="Enter your first name" required className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="required">Last Name</label>
                  <input
                    type="text" id="lastName" name="lastName"
                    value={formData.lastName} onChange={handleChange}
                    placeholder="Enter your last name" required className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="required">Email</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    placeholder="Enter your email" required className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="required">Password</label>
                  <input
                    type="password" id="password" name="password"
                    value={formData.password} onChange={handleChange}
                    placeholder="Create a password" required className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel" id="phone" name="phone"
                    value={formData.phone} onChange={handleChange}
                    placeholder="Enter your phone number" className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    type="date" id="dateOfBirth" name="dateOfBirth"
                    value={formData.dateOfBirth} onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender" name="gender"
                    value={formData.gender} onChange={handleChange} className="form-input"
                  >
                    {genders.map(gender => <option key={gender} value={gender}>{gender}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="country" className="required">Country</label>
                  <select
                    id="country" name="country"
                    value={formData.country} onChange={handleChange}
                    required className="form-input"
                  >
                    {countries.map(country => <option key={country} value={country}>{country}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text" id="city" name="city"
                  value={formData.city} onChange={handleChange}
                  placeholder="Enter your city" className="form-input"
                />
              </div>
            </div>

            <div className="terms-section">
              <label className="checkbox-container terms-checkbox">
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  required
                />
                <span className="checkmark"></span>
                <span>
                  I agree to the{' '}
                  <Link to="/terms" className="inline-link">Terms of Service</Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="inline-link">Privacy Policy</Link>
                </span>
              </label>
            </div>

            <div className="form-actions" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap:'1rem', marginTop:'1.5rem'}}>
              <button type="submit" className="auth-btn primary"
              style={{
                padding: '0.8rem 2rem',
                fontSize: '1rem ',
                borderRadius:'8px',
                cursor: 'pointer'
              }}>
                Submit Application
              </button>
              <Link to="/login" className="auth-link back-link" style={{fontSize: '0.9rem' , color: '#0077b6'
              }}>
                Already have an account? Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;