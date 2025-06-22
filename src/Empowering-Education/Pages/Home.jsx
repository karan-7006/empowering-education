import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Header />

            <div className="mt-1 mb-1">
                <div className="d-flex align-items-center justify-content-center bg-light shadow-sm p-4 gap-4">
                    <div className="display-1" role="img" aria-label="Noodle Bowl">
                        🚀
                    </div>
                    <div className="text-center">
                        <h1 className="display-3 fw-bold text-primary mb-1">
                            Empowering<span className="text-dark">-Education</span>
                        </h1>
                        <p className="lead fw-bold text-primary mb-0">
                            The <span className="text-dark fw-semibold">Campus</span>{" "}
                            <span className="text-dark fw-semibold">Companion</span>
                        </p>
                    </div>
                </div>
            </div>

            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
                data-bs-wrap="true"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={0}
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                    />
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg"
                            style={{ height: "500px", objectFit: "cover" }}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>🚀 Empowering Education (E²): Learn. Share. Grow.</h5>
                            <p>
                                A student-driven platform built to uplift learners through shared resources, collaborative tools, and a powerful learning community.
                                📚 Discover knowledge, 💡 spark ideas, and 🎓 shape your future — together.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
                            style={{ height: "500px", objectFit: "cover" }}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>🎓 Learn Beyond Limits with E²</h5>
                            <p>
                                Empowering minds with free resources, peer support, and a community that believes in collective growth.
                                Together, we rise — one lesson, one student, one dream at a time. 🌱✨
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg"
                            style={{ height: "500px", objectFit: "cover" }}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Your Learning. Your Power.</h5>
                            <p>
                                Break barriers and unlock your potential with Empowering Education (E²).
                                From notes to mentorship — everything you need to thrive is just a click away. 🔓💡
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container text-center py-5">
                <NavLink to="/MarketPlace" className="btn btn-primary btn-lg">
                    Explore MarketPlace
                </NavLink>
            </div>

            <div className="container-fluid bg-light min-vh-100 py-5">
                {/* How Our Platform Works Section */}
                <div className="container mb-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-dark mb-3">How Our Platform Works</h2>
                        <p className="text-primary mb-4">Connecting Students Through Resource Sharing</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm bg-white">
                                <div className="card-body text-center p-4">
                                    <div className="d-flex justify-content-center mb-3">
                                        <div className="bg-primary bg-opacity-10 rounded p-3">
                                            <svg width="40" height="40" fill="#0d6efd" viewBox="0 0 24 24">
                                                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold mb-3">List Your Resources</h5>
                                    <p className="text-muted small">
                                        Easily list books, notes, and stationery items you want to share, sell, donate, or rent.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm bg-white">
                                <div className="card-body text-center p-4">
                                    <div className="d-flex justify-content-center mb-3">
                                        <div className="bg-success bg-opacity-10 rounded p-3">
                                            <svg width="40" height="40" fill="#198754" viewBox="0 0 24 24">
                                                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h3v-5c0-1.1.9-2 2-2h6c.8 0 1.53.5 1.84 1.25l.66 1.75H20v5h-3v6H4zm9.5-7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold mb-3">Connect with Peers</h5>
                                    <p className="text-muted small">
                                        Browse and connect with students in your college who have the resources you need.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm bg-white">
                                <div className="card-body text-center p-4">
                                    <div className="d-flex justify-content-center mb-3">
                                        <div className="bg-secondary bg-opacity-10 rounded p-3">
                                            <svg width="40" height="40" fill="#6c757d" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold mb-3">Flexible Transactions</h5>
                                    <p className="text-muted small">
                                        Choose to share, sell, donate, or rent resources based on your needs and preferences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Why Use Our Platform Section */}
                <div className="container mb-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-dark mb-3">Why Use Our Platform?</h2>
                        <p className="text-primary mb-4">Empowering Students Through Resource Sharing</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 shadow-sm bg-white">
                                <div className="card-body text-center p-4">
                                    <div className="d-flex justify-content-center mb-3">
                                        <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                                            <svg width="32" height="32" fill="#0d6efd" viewBox="0 0 24 24">
                                                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h6 className="fw-bold mb-3">Cost Savings</h6>
                                    <p className="text-muted small">
                                        Reduce expenses by sharing, renting, or buying used resources.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 shadow-sm bg-white">
                                <div className="card-body text-center p-4">
                                    <div className="d-flex justify-content-center mb-3">
                                        <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                            <svg width="32" height="32" fill="#198754" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h6 className="fw-bold mb-3">Sustainability</h6>
                                    <p className="text-muted small">
                                        Promote recycling and reduce waste by reusing educational resources.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 shadow-sm bg-white">
                                <div className="card-body text-center p-4">
                                    <div className="d-flex justify-content-center mb-3">
                                        <div className="bg-info bg-opacity-10 rounded-circle p-3">
                                            <svg width="32" height="32" fill="#0dcaf0" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h6 className="fw-bold mb-3">Community Support</h6>
                                    <p className="text-muted small">
                                        Build connections and help fellow students in your campus.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 shadow-sm bg-white">
                                <div className="card-body text-center p-4">
                                    <div className="d-flex justify-content-center mb-3">
                                        <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                                            <svg width="32" height="32" fill="#dc3545" viewBox="0 0 24 24">
                                                <path d="M18,8A6,6 0 0,0 12,2A6,6 0 0,0 6,8H4A2,2 0 0,0 2,10V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V10A2,2 0 0,0 20,8H18M12,4A4,4 0 0,1 16,8H8A4,4 0 0,1 12,4Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h6 className="fw-bold mb-3">Secure Transactions</h6>
                                    <p className="text-muted small">
                                        Safe and verified platform for campus resource exchanges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* College Updates & Announcements Section */}
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-dark mb-3">College Updates & Announcements</h2>
                        <p className="text-primary mb-4">Stay Informed About Campus News and Events</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm bg-white">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="bg-primary bg-opacity-10 rounded p-2 me-3">
                                            <svg width="24" height="24" fill="#0d6efd" viewBox="0 0 24 24">
                                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                                            </svg>
                                        </div>
                                        <h5 className="fw-bold mb-0">Academic Calendar</h5>
                                    </div>
                                    <p className="text-muted small mb-3">
                                        View important dates, exam schedules, and semester timelines.
                                    </p>
                                    <a href="#" className="text-primary text-decoration-none small fw-semibold">
                                        View Full Calendar
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm bg-white">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="bg-success bg-opacity-10 rounded p-2 me-3">
                                            <svg width="24" height="24" fill="#198754" viewBox="0 0 24 24">
                                                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h3v-5c0-1.1.9-2 2-2h6c.8 0 1.53.5 1.84 1.25l.66 1.75H20v5h-3v6H4z" />
                                            </svg>
                                        </div>
                                        <h5 className="fw-bold mb-0">Campus Events</h5>
                                    </div>
                                    <p className="text-muted small mb-3">
                                        Discover upcoming workshops, seminars, and student activities.
                                    </p>
                                    <a href="#" className="text-success text-decoration-none small fw-semibold">
                                        Explore Events
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm bg-white">
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="bg-secondary bg-opacity-10 rounded p-2 me-3">
                                            <svg width="24" height="24" fill="#6c757d" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                        <h5 className="fw-bold mb-0">Internship Opportunities</h5>
                                    </div>
                                    <p className="text-muted small mb-3">
                                        Find latest internship and job openings for students.
                                    </p>
                                    <a href="#" className="text-secondary text-decoration-none small fw-semibold">
                                        View Opportunities
                                    </a>
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

export default Home
