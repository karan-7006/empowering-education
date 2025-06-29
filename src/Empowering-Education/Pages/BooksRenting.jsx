import React, { useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import NavHeader from '../Common/NavHeader';
import { NavLink } from 'react-router-dom';

export default function BooksRenting() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleNotifyClick = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setEmail('');
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      alert('Thank you! We will notify you when book renting launches.');
      setShowModal(false);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundImage: `url('/Images/Books1.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <NavHeader title="Books Renting" />

      <div className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <div className="card shadow-lg p-4" style={{ maxWidth: '600px', width: '100%' }}>
          <div className="text-center mb-4">
            <svg
              className="mb-3"
              style={{ width: '80px', height: '80px', color: '#6f42c1' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <h2 className="h3 fw-bold text-dark">Book Renting Coming Soon!</h2>
            <p className="text-muted">
              We're working hard to bring you an exciting book renting feature. Stay tuned for an easy and affordable way to rent books from your campus community.
            </p>
          </div>

          <div className="alert alert-light border-start border-4 border-primary">
            <strong>Feature Highlights:</strong>
            <ul className="mt-2 mb-0">
              <li>Affordable book rentals</li>
              <li>Wide selection of textbooks</li>
              <li>Flexible rental periods</li>
              <li>Easy pickup and return</li>
            </ul>
          </div>

          <div className="d-flex justify-content-center mt-4 gap-3">
            <NavLink to="/MarketPlace" className="btn btn-primary px-4">Back to Marketplace</NavLink>
            <button onClick={handleNotifyClick} className="btn btn-success px-4">Notify Me</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 z-3">
          <div className="bg-white p-4 rounded shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
            <h4 className="fw-bold mb-3">Get Notified</h4>
            <p className="text-muted mb-3">Enter your email to be notified when book renting launches!</p>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-3"
            />
            <div className="d-flex justify-content-end gap-2">
              <button onClick={handleCancel} className="btn btn-outline-secondary">Cancel</button>
              <button onClick={handleSubmit} className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
