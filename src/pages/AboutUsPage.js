// AboutUsPage.js
import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="marine-theme-page">
      <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem'}}>
        <div className="about-content" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '3rem',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          
          {/* Hero Section with Image */}
          <div className="about-header" style={{textAlign: 'center', marginBottom: '3rem'}}>
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Ocean Conservation"
              style={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '15px',
                marginBottom: '2rem'
              }}
            />
            <h1 style={{color: '#0077b6', fontSize: '3rem', marginBottom: '1rem'}}>About Waves of Change</h1>
            <p style={{color: '#718096', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
              Waves of Change is a global marine conservation organization dedicated to protecting our oceans and marine ecosystems. Founded by passionate marine scientists and conservationists, we mobilize communities to take action against ocean pollution, habitat destruction, and climate change impacts.
            </p>
          </div>

          <div className="about-sections" style={{display: 'grid', gap: '3rem'}}>
            
            {/* Mission Section with Image */}
            <div className="mission-section" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
              <div>
                <h2 style={{color: '#0077b6', marginBottom: '1rem'}}>Our Mission</h2>
                <p style={{color: '#4a5568', lineHeight: '1.8', fontSize: '1.1rem'}}>
                  To protect and restore marine ecosystems through community-driven conservation, scientific research, and sustainable solutions that create lasting positive change for our oceans and the communities that depend on them.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581595219318-03ce47d3d607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Marine Conservation Mission"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                />
              </div>
            </div>

            {/* Impact Section with Background Image */}
            <div className="stats-section">
              <div style={{
                background: 'linear-gradient(rgba(0,60,100,0.8), rgba(0,120,180,0.8)), url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
                padding: '3rem 2rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <h2 style={{color: 'white', marginBottom: '2rem', fontSize:'2.5rem', textAlign: 'center'}}>Our Impact</h2>
                <div className="impact-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '2rem',

                  textAlign: 'center'
                }}>
                  <div className="impact-item">
                    <div style={{fontSize: '2.0rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem'}}>10,000+</div>
                    <div style={{color: 'rgba(255,255,255,0.9)'}}>Volunteers Worldwide</div>
                  </div>
                  <div className="impact-item">
                    <div style={{fontSize: '2.0rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem'}}>500+</div>
                    <div style={{color: 'rgba(255,255,255,0.9)'}}>Conservation Projects</div>
                  </div>
                  <div className="impact-item">
                    <div style={{fontSize: '2.0rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem'}}>50+</div>
                    <div style={{color: 'rgba(255,255,255,0.9)'}}>Coastal Communities</div>
                  </div>
                  <div className="impact-item">
                    <div style={{fontSize: '2.0rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem'}}>5</div>
                    <div style={{color: 'rgba(255,255,255,0.9)'}}>Countries Reached</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section with Photos */}
            <div className="team-section">
              <h2 style={{color: '#0077b6', marginBottom: '2rem'}}>Our Team</h2>
              <div className="team-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                <div className="team-member" style={{
                  background: 'linear-gradient(135deg, #caf0f8, #90e0ef)',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                    alt="Dr. Sarah Chen"
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 1rem',
                      border: '3px solid #0077b6'
                    }}
                  />
                  <h3 style={{color: '#0077b6', marginBottom: '0.5rem'}}>Dr. Sarah Chen</h3>
                  <p style={{color: '#718096', fontStyle: 'italic', marginBottom: '1rem'}}>Marine Biologist & Founder</p>
                  <p style={{color: '#4a5568'}}>
                    With over 15 years of experience in marine conservation, 
                    Dr. Chen leads our scientific initiatives and research programs.
                  </p>
                </div>
                
                <div className="team-member" style={{
                  background: 'linear-gradient(135deg, #caf0f8, #90e0ef)',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Marcus Rodriguez"
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 1rem',
                      border: '3px solid #0077b6'
                    }}
                  />
                  <h3 style={{color: '#0077b6', marginBottom: '0.5rem'}}>Marcus Rodriguez</h3>
                  <p style={{color: '#718096', fontStyle: 'italic', marginBottom: '1rem'}}>Community Director</p>
                  <p style={{color: '#4a5568'}}>
                    Marcus coordinates our global volunteer network and community 
                    outreach programs across 25 countries.
                  </p>
                </div>

                <div className="team-member" style={{
                  background: 'linear-gradient(135deg, #caf0f8, #90e0ef)',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}>
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
                    alt="Dr. Elena Martinez"
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      margin: '0 auto 1rem',
                      border: '3px solid #0077b6'
                    }}
                  />
                  <h3 style={{color: '#0077b6', marginBottom: '0.5rem'}}>Dr. Elena Martinez</h3>
                  <p style={{color: '#718096', fontStyle: 'italic', marginBottom: '1rem'}}>Research Director</p>
                  <p style={{color: '#4a5568'}}>
                    Leading our coral restoration and marine research programs with 
                    expertise in marine ecology and conservation science.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="cta-section" style={{
              background: 'linear-gradient(135deg, #0077b6, #0096c7)',
              borderRadius: '15px',
              padding: '3rem 2rem',
              textAlign: 'center',
              color: 'white',
              marginTop: '2rem'
            }}>
              <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>Join Our Movement</h2>
              <p style={{fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
                Together, we can create waves of positive change for our oceans
              </p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <button className="auth-btn primary" style={{
                  background: 'white',
                  color: '#0077b6',
                  textDecoration: 'none'
                }}>
                  Become a Volunteer
                </button>
                <button className="auth-btn secondary" style={{
                  background: 'transparent',
                  border: '2px solid white',
                  color: 'white',
                  textDecoration: 'none'
                }}>
                  Support Our Mission
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;