import React, { useState } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import NavHeader from '../Common/NavHeader';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
        alert('Thank you for your message! We\'ll get back to you soon.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div>
            <Header />

            <NavHeader title="Contact" subtitle="-Us" />

            <div className="container-fluid bg-light min-vh-100 py-5">
                <div className="container">
                    {/* Contact Form Section */}
                    <div className="row g-5 mb-5">
                        <div className="col-lg-8">
                            <div className="card bg-primary-subtle border-0 shadow-sm bg-white">
                                <div className="card-body p-5">
                                    <div className="text-center mb-4">
                                        <h2 className="fw-bold text-dark mb-3">Send Us a Message</h2>
                                        <p className="text-primary mb-4">We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label htmlFor="name" className="form-label fw-semibold text-dark">Full Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="form-label fw-semibold text-dark">Email Address</label>
                                                <input
                                                    type="email"
                                                    className="form-control form-control-lg"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="subject" className="form-label fw-semibold text-dark">Subject</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="What's this about?"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="message" className="form-label fw-semibold text-dark">Message</label>
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    rows="6"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    required
                                                    placeholder="Tell us more about your inquiry..."
                                                ></textarea>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button type="submit" className="btn btn-primary btn-lg px-5 py-3 mt-4">
                                                    <svg width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 24 24">
                                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                                    </svg>
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="col-lg-4">
                            <div className="card bg-danger-subtle h-100 border-0 shadow-sm bg-white">
                                <div className="card-body p-4">
                                    <h3 className="fw-bold text-dark mb-4">Get in Touch</h3>

                                    <div className="mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-primary bg-opacity-10 rounded p-2 me-3">
                                                <svg width="24" height="24" fill="#0d6efd" viewBox="0 0 24 24">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-1">Address</h6>
                                                <p className="text-muted small mb-0">123 Campus Drive<br />University City, State 12345</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-success bg-opacity-10 rounded p-2 me-3">
                                                <svg width="24" height="24" fill="#198754" viewBox="0 0 24 24">
                                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-1">Phone</h6>
                                                <p className="text-muted small mb-0">+1 (555) 123-4567</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-info bg-opacity-10 rounded p-2 me-3">
                                                <svg width="24" height="24" fill="#0dcaf0" viewBox="0 0 24 24">
                                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-1">Email</h6>
                                                <p className="text-muted small mb-0">contact@empowering-education.com</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-secondary bg-opacity-10 rounded p-2 me-3">
                                                <svg width="24" height="24" fill="#6c757d" viewBox="0 0 24 24">
                                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-1">Office Hours</h6>
                                                <p className="text-muted small mb-0">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: 10:00 AM - 4:00 PM</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-top pt-4">
                                        <h6 className="fw-bold mb-3">Follow Us</h6>
                                        <div className="d-flex gap-2">
                                            <a href="#" className="btn btn-outline-primary btn-sm">
                                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="btn btn-outline-primary btn-sm">
                                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="btn btn-outline-primary btn-sm">
                                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="container mb-5">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold text-dark mb-3">Frequently Asked Questions</h2>
                            <p className="text-primary mb-4">Quick answers to common questions</p>
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="card bg-primary-subtle h-100 border-0 shadow-sm bg-white">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3 text-primary">How do I list my resources?</h5>
                                        <p className="text-muted small">
                                            Simply create an account, navigate to the "Add Resource" section, and fill out the details about your books, notes, or stationery items. You can choose to share, sell, donate, or rent them.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card bg-danger-subtle h-100 border-0 shadow-sm bg-white">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3 text-success">Is the platform free to use?</h5>
                                        <p className="text-muted small">
                                            Yes! Our platform is completely free for students to use. We believe in empowering education through accessible resource sharing within the campus community.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card bg-danger-subtle h-100 border-0 shadow-sm bg-white">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3 text-info">How do I contact other students?</h5>
                                        <p className="text-muted small">
                                            Once you find a resource you need, you can use our secure messaging system to contact the student directly. All communications are facilitated through our platform for safety.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card bg-primary-subtle h-100 border-0 shadow-sm bg-white">
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-3 text-secondary">What if I have technical issues?</h5>
                                        <p className="text-muted small">
                                            Our support team is here to help! Use the contact form above or reach out via email. We typically respond within 24 hours during business days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ContactUs