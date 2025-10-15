import React from 'react';
const UserPage = () => {
  const userVolunteerHistory = [
    { id: 1, event: "Beach Cleanup", date: "2024-01-15", hours: 4, status: "Completed" },
    { id: 2, event: "Marine Research", date: "2024-01-20", hours: 6, status: "Completed" },
    { id: 3, event: "Coral Restoration", date: "2024-01-25", hours: 5, status: "Completed" }
  ];
  const upcomingEvents = [
    { id: 1, event: "Ocean Cleanup Drive", date: "2024-02-10", time: "9:00 AM", location: "Coastal Bay" }
  ];
  return (
    <div className="marine-theme-page user-page-content">
      <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <div className="user-profile">
          <div className="profile-header">
            <div className="profile-avatar"></div>
            <div className="profile-info">
              <h1>Welcome Back, Ocean Defender!</h1>
              <p>Thank you for protecting our marine ecosystems with Waves of Change</p>
            </div>
          </div>

          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-number">15</div>
                <div className="stat-label">Total Hours</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-number">3</div>
                <div className="stat-label">Events Completed</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-number">1</div>
                <div className="stat-label">Upcoming Events</div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-sections">
          <div className="user-section">
            <h2>Volunteer History</h2>
            <div className="history-list">
              {userVolunteerHistory.map(record => (
                <div key={record.id} className="history-item" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #e2e8f0'}}>
                  <div className="event-info">
                    <h4 style={{color: '#2d3748', marginBottom: '0.25rem'}}>{record.event}</h4>
                    <p style={{color: '#718096', margin: 0}}>Date: {record.date}</p>
                  </div>
                  <div className="event-details" style={{textAlign: 'right'}}>
                    <span className="hours" style={{display: 'block', color: '#0077b6', fontWeight: '600', marginBottom: '0.25rem'}}>{record.hours} hours</span>
                    <span className="status completed" style={{padding: '0.25rem 0.75rem', background: '#c6f6d5', color: '#22543d', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '600'}}>{record.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="user-section">
            <h2>Upcoming Events</h2>
            <div className="upcoming-list">
              {upcomingEvents.map(event => (
                <div key={event.id} className="upcoming-item" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #e2e8f0'}}>
                  <div className="event-info">
                    <h4 style={{color: '#2d3748', marginBottom: '0.25rem'}}>{event.event}</h4>
                    <p style={{color: '#718096', margin: 0}}>{event.date} at {event.time}</p>
                    <p className="location" style={{color: '#0077b6', fontWeight: '600', margin: 0}}>{event.location}</p>
                  </div>
                  <button className="auth-btn primary">View Details</button>
                </div>
              ))}
            </div>
          </div>
          <div className="user-section">
            <h2>Your Ocean Impact</h2>
            <div className="impact-stats" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center'}}>
              <div className="impact-item">
                <span className="impact-number" style={{display: 'block', fontSize: '1.5rem', fontWeight: '700', color: '#0077b6', marginBottom: '0.5rem'}}>50kg</span>
                <span className="impact-label" style={{color: '#718096', fontSize: '0.9rem'}}>Plastic Removed</span>
              </div>
              <div className="impact-item">
                <span className="impact-number" style={{display: 'block', fontSize: '1.5rem', fontWeight: '700', color: '#0077b6', marginBottom: '0.5rem'}}>100+</span>
                <span className="impact-label" style={{color: '#718096', fontSize: '0.9rem'}}>Marine Lives Saved</span>
              </div>
              <div className="impact-item">
                <span className="impact-number" style={{display: 'block', fontSize: '1.5rem', fontWeight: '700', color: '#0077b6', marginBottom: '0.5rem'}}>25m²</span>
                <span className="impact-label" style={{color: '#718096', fontSize: '0.9rem'}}>Coral Restored</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPage;