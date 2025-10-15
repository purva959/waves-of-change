// import React from 'react';
// import { Link } from 'react-router-dom';
// const HomePage = () => {
//   const volunteerOpportunities = [
//      { id: 1,
//       title: "Beach Cleanup",
//       description: "Help clean up local beaches and protect marine life from plastic pollution",
//       location: "Coastal Areas",
//       duration: "4 hours",
//       volunteersNeeded: 15
//     },
//     { id: 2,
//       title: "Marine Research",
//       description: "Assist in marine data collection and scientific research",
//       location: "Research Centers",
//       duration: "6 hours",
//       volunteersNeeded: 8
//     },
//     { id: 3,
//       title: "Coral Restoration",
//       description: "Help restore and protect coral reef ecosystems",
//       location: "Marine Sanctuaries",
//       duration: "5 hours",
//       volunteersNeeded: 10
//     },
//     { id: 4,
//       title: "Environmental Education",
//       description: "Teach communities about marine conservation",
//       location: "Local Schools",
//       duration: "3 hours",
//       volunteersNeeded: 6
//     }
//   ];
//   const impactStats = [
//     { number: "10,000+", label: "Volunteers Mobilized" },
//     { number: "500+", label: "Projects Completed" },
//     { number: "50+", label: "Communities Served" },
//     { number: "5", label: "Countries Active" }
//   ];
//   return (
//     <div className="marine-theme-page">
//       <section className="hero-section">    {/* Hero Section */}
//         <div className="hero-content">
//           <h1>Protecting Our Ocean for Future Generations</h1>
//           <p>
//             Join Waves of Change in our mission to create a healthy ocean—one that sustains us and thrives for generations to come.
//           </p>
//           <div className="hero-buttons">
//             <Link to="/register" className="cta-button cta-button-primary">
//               Take Action
//             </Link>
//             <Link to="/about" className="cta-button cta-button-secondary">
//               Learn More
//             </Link>
//           </div>
//         </div>
//       </section>
//       <div className="home-container">
//         <section className="impact-section"> {/* Impact Stats Section */}
//           <h2>Our Impact</h2>
//           <div className="stats-grid">
//             {impactStats.map((stat, index) => (
//               <div key={index} className="stat-item">
//                 <div className="stat-number">{stat.number}</div>
//                 <div className="stat-label">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </section>
//         <section className="mission-section">    {/* Mission Section */}
//           <h2>Our Mission</h2>
//           <p> To protect and restore marine ecosystems through community-driven conservation, scientific research, 
//             and sustainable solutions that create lasting positive change for our oceans. </p>
//           <Link to="/about"> Learn about our work › </Link>
//         </section>
//         <section className="opportunities-section"> {/* Opportunities Section */}
//           <h2>Get Involved</h2>
//           <div className="opportunities-grid">
//             {volunteerOpportunities.map(opportunity => (
//               <div key={opportunity.id} className="opportunity-card">
//                 <h3>{opportunity.title}</h3>
//                 <p>{opportunity.description}</p>
//                 <div className="opportunity-details">
//                   <div className="detail-row">
//                     <span className="detail-label">Location:</span>
//                     <span className="detail-value">{opportunity.location}</span>
//                   </div>
//                   <div className="detail-row">
//                     <span className="detail-label">Duration:</span>
//                     <span className="detail-value">{opportunity.duration}</span>
//                   </div>
//                   <div className="detail-row">
//                     <span className="detail-label">Volunteers Needed:</span>
//                     <span className="detail-value">{opportunity.volunteersNeeded}</span>
//                   </div>
//                 </div>
//                 <Link to="/register" className="volunteer-btn"> Sign Up Now </Link>
//               </div>
//             ))}
//           </div>
//         </section>
//         <section className="cta-section">   {/* Call to Action Section */}
//           <h2>Ready to Make a Difference?</h2>
//           <p> Join thousands of volunteers working to protect our oceans and marine life.</p>
//           <div className="cta-buttons">
//             <Link to="/register" className="cta-button cta-button-primary">
//               Join Now
//             </Link>
//             <Link to="/donate" className="cta-button cta-button-secondary">
//               Donate
//             </Link>
//           </div>
//         </section>
//         <section className="newsletter-section"> {/* Newsletter Section */}
//           <h2>Stay Connected</h2>
//           <p> Get the latest updates on our conservation efforts and volunteer opportunities. </p>
//           <div className="newsletter-form">
//             <input 
//               type="email" 
//               placeholder="Enter your email address"
//               className="newsletter-input"/>
//             <button className="newsletter-button"> Subscribe </button>
//           </div>
//         </section>
//       </div>
//       <footer className="footer"> {/* Footer */}
//         <div className="footer-content">
//           <p> &copy; 2024 Waves of Change. All rights reserved.</p>
//           <p> Together, we create waves of positive change for our oceans. </p>
//           <div className="footer-links">
//             <Link to="/about">About</Link>
//             <Link to="/donate">Donate</Link>
//             <Link to="/contact">Contact</Link>
//             <Link to="/privacy">Privacy Policy</Link>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };
// export default HomePage;

// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Data for volunteer opportunities and impact stats
  const volunteerOpportunities = [
    { id: 1, title: "Beach Cleanup", description: "Help clean up local beaches...", location: "Coastal Areas", duration: "4 hours", volunteersNeeded: 15 },
    { id: 2, title: "Marine Research", description: "Assist in marine data collection...", location: "Research Centers", duration: "6 hours", volunteersNeeded: 8 },
    { id: 3, title: "Coral Restoration", description: "Help restore and protect coral reefs...", location: "Marine Sanctuaries", duration: "5 hours", volunteersNeeded: 10 },
    { id: 4, title: "Environmental Education", description: "Teach communities about marine conservation...", location: "Local Schools", duration: "3 hours", volunteersNeeded: 6 }
  ];

  const impactStats = [
    { number: "10,000+", label: "Volunteers Mobilized" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Communities Served" },
    { number: "5", label: "Countries Active" }
  ];

  return (
    <div className="marine-theme-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Protecting Our Ocean for Future Generations</h1>
          <p>Join Waves of Change in our mission to create a healthy ocean...</p>
          <div className="hero-buttons">
            <Link to="/register" className="cta-button cta-button-primary">Take Action</Link>
            <Link to="/about" className="cta-button cta-button-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <div className="home-container">
        {/* Impact Stats Section */}
        <section className="impact-section">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="opportunities-section">
          <h2>Get Involved</h2>
          <div className="opportunities-grid">
            {volunteerOpportunities.map(opportunity => (
              <div key={opportunity.id} className="opportunity-card">
                <h3>{opportunity.title}</h3>
                <p>{opportunity.description}</p>
                <div className="opportunity-details">
                  {/* ... opportunity details ... */}
                </div>
                <Link to="/register" className="volunteer-btn">Sign Up Now</Link>
              </div>
            ))}
          </div>
        </section>

        {/* ... other sections ... */}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Waves of Change. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/donate">Donate</Link>
            {/* ... other footer links ... */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;