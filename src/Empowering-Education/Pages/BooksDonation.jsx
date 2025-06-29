import React, { useRef, useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import NavHeader from '../Common/NavHeader';

export default function BooksDonation() {
  const imageRef = useRef(null);
  const previewRef = useRef(null);
  const [points, setPoints] = useState(null);
  const [wellWish, setWellWish] = useState('');
  const [showResult, setShowResult] = useState(false);

  const wellWishes = [
    "Your generosity will help another student achieve their dreams!",
    "You've just made someone's educational journey easier.",
    "Thank you for sharing knowledge and supporting learning.",
    "Your kindness can change a student's life forever.",
    "Education is the most powerful weapon, and you just contributed to it.",
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && previewRef.current) {
      const reader = new FileReader();
      reader.onload = (event) => {
        previewRef.current.src = event.target.result;
        previewRef.current.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  };

  const calculateCreditPoints = (category, condition) => {
    const basePoints = {
      engineering: 50,
      science: 45,
      arts: 40,
      management: 55,
      programming: 60,
    };
    const conditionFactor = {
      new: 1.5,
      'very-good': 1.2,
      good: 1.0,
      moderate: 0.7,
      poor: 0.5,
    };
    return Math.round((basePoints[category] || 40) * (conditionFactor[condition] || 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.bookCategory.value;
    const condition = form.bookCondition.value;
    const title = form.bookTitle.value;

    if (!imageRef.current.files.length) {
      alert('Please upload a book image');
      return;
    }

    const credit = calculateCreditPoints(category, condition);
    setPoints(credit);
    setWellWish(wellWishes[Math.floor(Math.random() * wellWishes.length)]);
    setShowResult(true);

    const donation = {
      title,
      category,
      condition,
      image: previewRef.current.src,
      creditPoints: credit,
    };

    console.log('Book Donation Data:', donation);
    form.reset();
    previewRef.current.style.display = 'none';
  };

  return (
    <div style={{ backgroundImage: `url('/Images/Books3.jpg')`, backgroundSize: 'cover' }}>
      
      <Header />
      <NavHeader title="Donate Your Books" />

      {/* Donation Form */}
      <div className="container py-5">
        <div className="card shadow-lg mx-auto" style={{ maxWidth: '900px' }}>
          <div className="card-body bg-primary-subtle">
            <h2 className="text-center fw-bold text-danger mb-4"><u>Donate Your Books</u></h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="bookImage" className="form-label">Upload Book Image</label>
                <input type="file" ref={imageRef} onChange={handleImageChange} className="form-control" id="bookImage" accept="image/*" />
                <img ref={previewRef} alt="Preview" className="img-fluid mt-3 d-none" style={{ maxHeight: '300px' }} />
              </div>

              <div className="mb-3">
                <label htmlFor="bookTitle" className="form-label">Book Title</label>
                <input type="text" className="form-control" id="bookTitle" required />
              </div>

              <div className="mb-3">
                <label htmlFor="bookCategory" className="form-label">Book Category</label>
                <select className="form-select" id="bookCategory" required>
                  <option value="">Select Category</option>
                  <option value="engineering">Engineering</option>
                  <option value="science">Science</option>
                  <option value="arts">Arts & Humanities</option>
                  <option value="management">Management</option>
                  <option value="programming">Programming</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="bookCondition" className="form-label">Book Condition</label>
                <select className="form-select" id="bookCondition" required>
                  <option value="">Select Condition</option>
                  <option value="new">New</option>
                  <option value="very-good">Very Good</option>
                  <option value="good">Good</option>
                  <option value="moderate">Moderate</option>
                  <option value="poor">Poor</option>
                </select>
              </div>

              {showResult && (
                <>
                  <div className="alert alert-success text-center">
                    <strong>+{points} Points</strong><br />
                    <small>{wellWish}</small>
                  </div>
                </>
              )}

              <div className="text-center mt-4 mb-3">
                <button type="submit" className="btn btn-danger px-4">Donate Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>

        <Footer />

    </div>
  );
}

