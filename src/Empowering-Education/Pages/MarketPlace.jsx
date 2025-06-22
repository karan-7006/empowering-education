import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

const Marketplace = () => {
  const gradientTextStyle = {
    background: 'linear-gradient(45deg, #4b79a1, #ff6f61)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontWeight: 'bold'
  };

  const heroSectionStyle = {
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/775998/pexels-photo-775998.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  };

  const cardHoverStyle = {
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  };

  const iconStyle = {
    width: '80px',
    height: '80px',
    margin: '0 auto 20px'
  };

  return (
    <div>
      {/* Bootstrap CSS CDN */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
      />

      <Header />

      {/* Hero Section */}
      <div style={heroSectionStyle}>
        <div className="text-center">
          <h1 className="display-4 fw-bold mb-4">E² Marketplace</h1>
          <p className="lead fw-bold">Share, Sell, Rent, and Donate Educational Resources</p>
        </div>
      </div>

      {/* Marketplace Options */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {/* Buy Option */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card h-100 text-center shadow-sm"
                style={cardHoverStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body p-4">
                  <div style={iconStyle}>
                    <svg 
                      fill="none" 
                      stroke="#0d6efd" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2"
                      style={{width: '100%', height: '100%'}}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="card-title text-primary">Buy</h3>
                  <p className="card-text text-muted mb-4">
                    Purchase affordable books and stationery from your campus community.
                  </p>
                  <button className="btn btn-primary">Browse Items</button>
                </div>
              </div>
            </div>

            {/* Sell Option */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card h-100 text-center shadow-sm"
                style={cardHoverStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body p-4">
                  <div style={iconStyle}>
                    <svg 
                      fill="none" 
                      stroke="#198754" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2"
                      style={{width: '100%', height: '100%'}}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="card-title text-success">Sell</h3>
                  <p className="card-text text-muted mb-4">
                    List your used books and stationery to earn money and help fellow students.
                  </p>
                  <button className="btn btn-success">List Items</button>
                </div>
              </div>
            </div>

            {/* Rent Option */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card h-100 text-center shadow-sm"
                style={cardHoverStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body p-4">
                  <div style={iconStyle}>
                    <svg 
                      fill="none" 
                      stroke="#6f42c1" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2"
                      style={{width: '100%', height: '100%'}}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="card-title" style={{color: '#6f42c1'}}>Rent</h3>
                  <p className="card-text text-muted mb-4">
                    Rent books and stationery for a limited amount of time at affordable rates.
                  </p>
                  <button className="btn" style={{backgroundColor: '#6f42c1', color: 'white'}}>
                    Find Rentals
                  </button>
                </div>
              </div>
            </div>

            {/* Donate Option */}
            <div className="col-lg-3 col-md-6">
              <div 
                className="card h-100 text-center shadow-sm"
                style={cardHoverStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
              >
                <div className="card-body p-4">
                  <div style={iconStyle}>
                    <svg 
                      fill="none" 
                      stroke="#dc3545" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2"
                      style={{width: '100%', height: '100%'}}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="card-title text-danger">Donate</h3>
                  <p className="card-text text-muted mb-4">
                    Help students in need by donating books and stationery to the community.
                  </p>
                  <button className="btn btn-danger">Donate Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5" style={{backgroundColor: '#f8f9fa'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark">How Marketplace Works</h2>
            <p className="lead text-muted">Simple Steps to Share, Sell, Rent, and Donate</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card text-center h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <span 
                      className="display-4 fw-bold"
                      style={{color: '#0d6efd'}}
                    >
                      1
                    </span>
                  </div>
                  <h3 className="card-title">List Your Item</h3>
                  <p className="card-text text-muted">
                    Upload details, condition, and price of your book or stationery item.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card text-center h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <span 
                      className="display-4 fw-bold"
                      style={{color: '#198754'}}
                    >
                      2
                    </span>
                  </div>
                  <h3 className="card-title">Connect with Peers</h3>
                  <p className="card-text text-muted">
                    Browse listings and connect with students in your campus.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card text-center h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3">
                    <span 
                      className="display-4 fw-bold"
                      style={{color: '#6f42c1'}}
                    >
                      3
                    </span>
                  </div>
                  <h3 className="card-title">Complete Transaction</h3>
                  <p className="card-text text-muted">
                    Safely exchange items through our secure platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Bootstrap JS CDN */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Marketplace;