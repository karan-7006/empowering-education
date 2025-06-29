import React, { useRef, useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import NavHeader from '../Common/NavHeader';

export default function BookSelling() {
  const imageRef = useRef(null);
  const previewRef = useRef(null);
  const [suggestedPrice, setSuggestedPrice] = useState('');
  const [showAlert, setShowAlert] = useState(false);

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

  const suggestPrice = (category, condition) => {
    const basePrice = {
      engineering: 200,
      science: 180,
      arts: 150,
      management: 220,
      programming: 250,
    };
    const conditionFactor = {
      new: 1.0,
      'very-good': 0.8,
      good: 0.6,
      moderate: 0.4,
      poor: 0.2,
    };
    const calculatedPrice = Math.round(
      (basePrice[category] || 150) * (conditionFactor[condition] || 0.6)
    );
    setSuggestedPrice(`₹${calculatedPrice}`);
  };

  const handleChange = (e) => {
    const form = e.target.form;
    const category = form.bookCategory.value;
    const condition = form.bookCondition.value;
    suggestPrice(category, condition);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.bookTitle.value;
    const category = form.bookCategory.value;
    const condition = form.bookCondition.value;

    if (!imageRef.current.files.length) {
      alert('Please upload a book image');
      return;
    }

    const listing = {
      title,
      category,
      condition,
      price: suggestedPrice,
      image: previewRef.current.src,
    };

    console.log('Book Listing Data:', listing);
    setShowAlert(true);
    form.reset();
    setSuggestedPrice('');
    previewRef.current.style.display = 'none';

    setTimeout(() => setShowAlert(false), 4000);
  };

  return (
    <div style={{ backgroundImage: `url('/Images/Books1.jpg')`, backgroundSize: '100% 100%' }}>
      <Header />
      <NavHeader title="Sell Your Books" />

      <div className="container py-5">
        <div className="card shadow-lg mx-auto" style={{ maxWidth: '900px' }}>
          <div className="card-body bg-primary-subtle">
            <h2 className="text-center fw-bold text-primary mb-4"><u>Sell Your Books</u></h2>

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
                <select className="form-select" id="bookCategory" required onChange={handleChange}>
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
                <select className="form-select" id="bookCondition" required onChange={handleChange}>
                  <option value="">Select Condition</option>
                  <option value="new">New</option>
                  <option value="very-good">Very Good</option>
                  <option value="good">Good</option>
                  <option value="moderate">Moderate</option>
                  <option value="poor">Poor</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="suggestedPrice" className="form-label">Suggested Price</label>
                <input type="text" className="form-control bg-light" id="suggestedPrice" value={suggestedPrice} readOnly />
              </div>

              {showAlert && (
                <div className="alert alert-success text-center">
                  Your book has been listed for sale!
                </div>
              )}

              <div className="text-center mt-4 mb-3">
                <button type="submit" className="btn btn-primary px-4">List Book for Sale</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
