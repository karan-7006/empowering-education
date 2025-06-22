import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function AboutUs() {
    return (
        <div>
            <Header />

            {/* Hero Section */}
            <div className="mt-1 mb-1">
                <div className="d-flex align-items-center justify-content-center bg-light shadow-sm p-4 gap-4">
                    <div className="display-1" role="img" aria-label="About Icon">
                        🎓
                    </div>
                    <div className="text-center">
                        <h1 className="display-3 fw-bold text-primary mb-1">
                            About<span className="text-dark">-Us</span>
                        </h1>
                        <p className="lead fw-bold text-primary mb-0">
                            Our <span className="text-dark fw-semibold">Story</span>{" "}
                            <span className="text-dark fw-semibold">& Mission</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-light min-vh-100 py-5">
                <div className="container">
                    {/* Mission Statement */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-sm bg-white">
                                <div className="card-body p-5 text-center">
                                    <div className="mb-4">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-3">
                                            <svg width="48" height="48" fill="#0d6efd" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h2 className="fw-bold text-dark mb-4">Our Mission</h2>
                                    <p className="lead text-muted mb-4">
                                        To create a thriving peer-to-peer educational ecosystem where students can easily buy, sell, and donate 
                                        second-hand books and stationery while staying connected with the latest college updates, exam schedules, 
                                        and academic opportunities.
                                    </p>
                                    <div className="row g-4 mt-3">
                                        <div className="col-md-4">
                                            <div className="text-primary">
                                                <h4 className="fw-bold">10,000+</h4>
                                                <p className="small text-muted mb-0">Books Exchanged</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-success">
                                                <h4 className="fw-bold">5,000+</h4>
                                                <p className="small text-muted mb-0">Active Students</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="text-info">
                                                <h4 className="fw-bold">50+</h4>
                                                <p className="small text-muted mb-0">Partner Colleges</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* What We Do */}
                    <div className="mb-5">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold text-dark mb-3">What We Do</h2>
                            <p className="text-primary mb-4">Connecting Students Through Smart Resource Sharing</p>
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="card h-100 border-0 shadow-sm bg-white">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-primary bg-opacity-10 rounded p-3 me-3">
                                                <svg width="32" height="32" fill="#0d6efd" viewBox="0 0 24 24">
                                                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                                                </svg>
                                            </div>
                                            <h4 className="fw-bold text-dark mb-0">Book Exchange Platform</h4>
                                        </div>
                                        <p className="text-muted mb-3">
                                            Our peer-to-peer marketplace enables students to buy and sell second-hand textbooks, reference materials, 
                                            and study guides at affordable prices, making education more accessible to everyone.
                                        </p>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Buy books at discounted prices</span>
                                            </li>
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Sell your used books easily</span>
                                            </li>
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Secure payment system</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card h-100 border-0 shadow-sm bg-white">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-success bg-opacity-10 rounded p-3 me-3">
                                                <svg width="32" height="32" fill="#198754" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                </svg>
                                            </div>
                                            <h4 className="fw-bold text-dark mb-0">Donation Program</h4>
                                        </div>
                                        <p className="text-muted mb-3">
                                            We facilitate book and stationery donations, helping students who need educational resources but 
                                            may not have the financial means to purchase them, fostering a supportive academic community.
                                        </p>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Donate books to fellow students</span>
                                            </li>
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Request needed materials</span>
                                            </li>
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Build community connections</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card h-100 border-0 shadow-sm bg-white">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-info bg-opacity-10 rounded p-3 me-3">
                                                <svg width="32" height="32" fill="#0dcaf0" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2zm-1 2.98L7.91 10.09 2.82 10.81l4.09 3.97L5.82 19.78 11 17.27l5.18 2.51-.09-4.99 4.09-3.97-5.09-.72L11 4.98z"/>
                                                </svg>
                                            </div>
                                            <h4 className="fw-bold text-dark mb-0">Stationery Exchange</h4>
                                        </div>
                                        <p className="text-muted mb-3">
                                            Beyond books, we also facilitate the exchange of stationery items, lab equipment, and other 
                                            academic supplies, ensuring students have access to all necessary learning materials.
                                        </p>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Calculators and instruments</span>
                                            </li>
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Lab equipment and supplies</span>
                                            </li>
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Art and craft materials</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="card h-100 border-0 shadow-sm bg-white">
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-secondary bg-opacity-10 rounded p-3 me-3">
                                                <svg width="32" height="32" fill="#6c757d" viewBox="0 0 24 24">
                                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                                                </svg>
                                            </div>
                                            <h4 className="fw-bold text-dark mb-0">College Updates Hub</h4>
                                        </div>
                                        <p className="text-muted mb-3">
                                            Stay informed with the latest college announcements, exam schedules, seminar information, 
                                            and academic events all in one centralized platform designed for student convenience.
                                        </p>
                                        <ul className="list-unstyled">
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Real-time exam notifications</span>
                                            </li>
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Seminar and workshop alerts</span>
                                            </li>
                                            <li className="mb-2">
                                                <span className="text-success me-2">✓</span>
                                                <span className="small">Important college announcements</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="mb-5">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold text-dark mb-3">Why Choose Empowering Education?</h2>
                            <p className="text-primary mb-4">The Benefits That Set Us Apart</p>
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100 border-0 shadow-sm bg-white text-center">
                                    <div className="card-body p-4">
                                        <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                                            <svg width="32" height="32" fill="#0d6efd" viewBox="0 0 24 24">
                                                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                                            </svg>
                                        </div>
                                        <h5 className="fw-bold mb-3">Affordable Education</h5>
                                        <p className="text-muted small">
                                            Save up to 70% on textbooks and educational materials through our peer-to-peer marketplace.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100 border-0 shadow-sm bg-white text-center">
                                    <div className="card-body p-4">
                                        <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                                            <svg width="32" height="32" fill="#198754" viewBox="0 0 24 24">
                                                <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V6h10v3z"/>
                                            </svg>
                                        </div>
                                        <h5 className="fw-bold mb-3">Secure Transactions</h5>
                                        <p className="text-muted small">
                                            All transactions are protected with secure payment gateways and verified user profiles.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100 border-0 shadow-sm bg-white text-center">
                                    <div className="card-body p-4">
                                        <div className="bg-info bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                                            <svg width="32" height="32" fill="#0dcaf0" viewBox="0 0 24 24">
                                                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h3v-5c0-1.1.9-2 2-2h6c.8 0 1.53.5 1.84 1.25l.66 1.75H20v5h-3v6H4zm9.5-7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                                            </svg>
                                        </div>
                                        <h5 className="fw-bold mb-3">Campus Community</h5>
                                        <p className="text-muted small">
                                            Connect with fellow students from your college and build lasting academic relationships.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100 border-0 shadow-sm bg-white text-center">
                                    <div className="card-body p-4">
                                        <div className="bg-warning bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                                            <svg width="32" height="32" fill="#ffc107" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                            </svg>
                                        </div>
                                        <h5 className="fw-bold mb-3">Quality Assurance</h5>
                                        <p className="text-muted small">
                                            Every listed item is verified for quality and authenticity before being made available.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100 border-0 shadow-sm bg-white text-center">
                                    <div className="card-body p-4">
                                        <div className="bg-danger bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                                            <svg width="32" height="32" fill="#dc3545" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                            </svg>
                                        </div>
                                        <h5 className="fw-bold mb-3">Sustainability</h5>
                                        <p className="text-muted small">
                                            Promote environmental responsibility by reusing and recycling educational materials.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="card h-100 border-0 shadow-sm bg-white text-center">
                                    <div className="card-body p-4">
                                        <div className="bg-secondary bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                                            <svg width="32" height="32" fill="#6c757d" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                            </svg>
                                        </div>
                                        <h5 className="fw-bold mb-3">24/7 Updates</h5>
                                        <p className="text-muted small">
                                            Never miss important college announcements with our real-time notification system.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Impact */}
                    <div className="mb-5">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold text-dark mb-3">Our Impact</h2>
                            <p className="text-primary mb-4">Making Education More Accessible</p>
                        </div>

                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="card border-0 shadow-sm bg-primary text-white text-center">
                                    <div className="card-body p-4">
                                        <div className="display-4 fw-bold mb-2">₹50L+</div>
                                        <h6 className="fw-semibold mb-2">Money Saved</h6>
                                        <p className="small mb-0 opacity-75">Total savings by students through our site</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card border-0 shadow-sm bg-success text-white text-center">
                                    <div className="card-body p-4">
                                        <div className="display-4 fw-bold mb-2">2000+</div>
                                        <h6 className="fw-semibold mb-2">Books Donated</h6>
                                        <p className="small mb-0 opacity-75">Free books shared with students in need</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card border-0 shadow-sm bg-info text-white text-center">
                                    <div className="card-body p-4">
                                        <div className="display-4 fw-bold mb-2">95%</div>
                                        <h6 className="fw-semibold mb-2">Success Rate</h6>
                                        <p className="small mb-0 opacity-75">Successful transactions completed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="card border-0 shadow-sm bg-secondary text-white text-center">
                                    <div className="card-body p-4">
                                        <div className="display-4 fw-bold mb-2">24/7</div>
                                        <h6 className="fw-semibold mb-2">Support</h6>
                                        <p className="small mb-0 opacity-75">Round-the-clock platform availability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-0 shadow-sm bg-white text-center">
                                <div className="card-body p-5">
                                    <h3 className="fw-bold text-dark mb-3">Ready to Join Our Community?</h3>
                                    <p className="text-muted mb-4">
                                        Start your journey with Empowering Education today. Buy, sell, donate, and stay updated 
                                        with your campus community all in one place.
                                    </p>
                                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                                        <a href="/register" className="btn btn-primary btn-lg px-4">
                                            <svg width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 24 24">
                                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                            </svg>
                                            Get Started
                                        </a>
                                        <a href="/resources" className="btn btn-outline-primary btn-lg px-4">
                                            <svg width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                            </svg>
                                            Browse Resources
                                        </a>
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

export default AboutUs