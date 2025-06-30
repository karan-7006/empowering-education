import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import NavHeader from '../Common/NavHeader'

function Blog() {
    return (
        <div>
            <Header />

            <NavHeader title="Campus" subtitle="-Blogs" />

            {/* Hero Banner */}
            <div className="container-fluid bg-gradient p-0">
                <div className="bg-primary bg-opacity-10 py-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold text-dark mb-2">📢 Stay Updated with Campus Life</h2>
                                <p className="lead text-muted mb-3">
                                    Get the latest news, events, admissions updates, and exam schedules all in one place
                                </p>
                                <div className="d-flex gap-2 flex-wrap">
                                    <span className="badge bg-primary">Live Updates</span>
                                    <span className="badge bg-success">Admission Open</span>
                                    <span className="badge bg-warning text-dark">Exam Alerts</span>
                                    <span className="badge bg-info">Events</span>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="display-1">🎓</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Breaking News Ticker */}
            <div className="bg-danger text-white py-2">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <span className="fw-bold me-3">🚨 BREAKING:</span>
                        <div className="overflow-hidden flex-grow-1">
                            <div className="d-flex animate-scroll">
                                <span className="me-5 text-nowrap">🔥 New Engineering Admissions Open - Apply by Jan 15th</span>
                                <span className="me-5 text-nowrap">📅 Mid-term Exams Schedule Released - Check Academic Calendar</span>
                                <span className="me-5 text-nowrap">🎉 Annual Tech Fest 2025 - Registration Now Open</span>
                                <span className="me-5 text-nowrap">💼 Campus Placement Drive - 50+ Companies Participating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-light min-vh-100 py-5">
                <div className="container">

                    {/* Featured Events Carousel */}
                    <div className="mb-5">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="fw-bold text-dark">🌟 Featured Campus Events</h2>
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-primary btn-sm" data-bs-target="#featuredCarousel" data-bs-slide="prev">
                                    ‹
                                </button>
                                <button className="btn btn-outline-primary btn-sm" data-bs-target="#featuredCarousel" data-bs-slide="next">
                                    ›
                                </button>
                            </div>
                        </div>

                        <div id="featuredCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row g-4">
                                        <div className="col-lg-4">
                                            <div className="card border-0 shadow-sm h-100">
                                                <img src="https://images.pexels.com/photos/7648306/pexels-photo-7648306.jpeg"
                                                    className="card-img-top" alt="Tech Fest" style={{ height: "200px", objectFit: "cover" }} />
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                                        <span className="badge bg-primary">Tech Event</span>
                                                        <small className="text-muted">Jan 15-17, 2025</small>
                                                    </div>
                                                    <h5 className="fw-bold">Annual Tech Fest 2025</h5>
                                                    <p className="text-muted small">Join the biggest technology festival with coding competitions, robotics shows, and innovation expo.</p>
                                                    <a href="#" className="btn btn-primary btn-sm">Register Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card border-0 shadow-sm h-100">
                                                <img src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
                                                    className="card-img-top" alt="Career Fair" style={{ height: "200px", objectFit: "cover" }} />
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                                        <span className="badge bg-success">Career</span>
                                                        <small className="text-muted">Jan 20-22, 2025</small>
                                                    </div>
                                                    <h5 className="fw-bold">Campus Placement Drive</h5>
                                                    <p className="text-muted small">Meet with 50+ top companies including Google, Microsoft, Amazon, and leading startups.</p>
                                                    <a href="#" className="btn btn-success btn-sm">Apply</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card border-0 shadow-sm h-100">
                                                <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg"
                                                    className="card-img-top" alt="Cultural Fest" style={{ height: "200px", objectFit: "cover" }} />
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                                        <span className="badge bg-warning text-dark">Cultural</span>
                                                        <small className="text-muted">Feb 5-7, 2025</small>
                                                    </div>
                                                    <h5 className="fw-bold">Spring Cultural Festival</h5>
                                                    <p className="text-muted small">Celebrate arts, music, dance, and literature with performances from renowned artists.</p>
                                                    <a href="#" className="btn btn-warning btn-sm">Join</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row g-4">
                                        <div className="col-lg-4">
                                            <div className="card border-0 shadow-sm h-100">
                                                <img src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
                                                    className="card-img-top" alt="Sports" style={{ height: "200px", objectFit: "cover" }} />
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                                        <span className="badge bg-info">Sports</span>
                                                        <small className="text-muted">Feb 10-15, 2025</small>
                                                    </div>
                                                    <h5 className="fw-bold">Inter-College Sports Meet</h5>
                                                    <p className="text-muted small">Annual sports championship featuring cricket, football, basketball, and athletics.</p>
                                                    <a href="#" className="btn btn-info btn-sm">Participate</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card border-0 shadow-sm h-100">
                                                <img src="https://images.pexels.com/photos/7869452/pexels-photo-7869452.jpeg"
                                                    className="card-img-top" alt="Seminar" style={{ height: "200px", objectFit: "cover" }} />
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                                        <span className="badge bg-secondary">Academic</span>
                                                        <small className="text-muted">Feb 18, 2025</small>
                                                    </div>
                                                    <h5 className="fw-bold">AI & Machine Learning Summit</h5>
                                                    <p className="text-muted small">Industry experts discuss the future of AI with hands-on workshops and networking.</p>
                                                    <a href="#" className="btn btn-secondary btn-sm">Attend</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card border-0 shadow-sm h-100">
                                                <img src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg"
                                                    className="card-img-top" alt="Workshop" style={{ height: "200px", objectFit: "cover" }} />
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                                        <span className="badge bg-dark">Workshop</span>
                                                        <small className="text-muted">Feb 25, 2025</small>
                                                    </div>
                                                    <h5 className="fw-bold">Entrepreneurship Bootcamp</h5>
                                                    <p className="text-muted small">Learn startup fundamentals from successful entrepreneurs and venture capitalists.</p>
                                                    <a href="#" className="btn btn-dark btn-sm">Enroll</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats Banner */}
                    <div className="row g-4 mb-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm bg-primary text-white text-center">
                                <div className="card-body p-3">
                                    <div className="display-6 fw-bold">25+</div>
                                    <small>Events This Month</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm bg-success text-white text-center">
                                <div className="card-body p-3">
                                    <div className="display-6 fw-bold">5K+</div>
                                    <small>Students Participating</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm bg-warning text-dark text-center">
                                <div className="card-body p-3">
                                    <div className="display-6 fw-bold">50+</div>
                                    <small>Companies Visiting</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm bg-info text-white text-center">
                                <div className="card-body p-3">
                                    <div className="display-6 fw-bold">12</div>
                                    <small>Upcoming Exams</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Three Column Layout */}
                    <div className="row g-4">

                        {/* Left Column - Latest Campus News */}
                        <div className="col-lg-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-header bg-primary text-white">
                                    <h4 className="fw-bold mb-0">📰 Latest Campus News</h4>
                                </div>
                                <div className="card-body p-0">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item border-0 p-3">
                                            <div className="d-flex align-items-start">
                                                <div className="bg-primary bg-opacity-10 rounded p-2 me-3">
                                                    <small className="text-primary fw-bold">JAN<br />12</small>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="fw-bold mb-1">New Library Wing Inaugurated</h6>
                                                    <p className="text-muted small mb-2">State-of-the-art digital library with 24/7 access now open to all students.</p>
                                                    <small className="text-primary">Read More →</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item border-0 p-3 bg-light">
                                            <div className="d-flex align-items-start">
                                                <div className="bg-success bg-opacity-10 rounded p-2 me-3">
                                                    <small className="text-success fw-bold">JAN<br />10</small>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="fw-bold mb-1">Student Wins National Coding Competition</h6>
                                                    <p className="text-muted small mb-2">CS final year student secures first place in HackerRank National Championship.</p>
                                                    <small className="text-success">Read More →</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item border-0 p-3">
                                            <div className="d-flex align-items-start">
                                                <div className="bg-warning bg-opacity-10 rounded p-2 me-3">
                                                    <small className="text-warning fw-bold">JAN<br />08</small>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="fw-bold mb-1">New Cafeteria Menu Launched</h6>
                                                    <p className="text-muted small mb-2">Healthy and diverse food options now available with student-friendly pricing.</p>
                                                    <small className="text-warning">Read More →</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item border-0 p-3 bg-light">
                                            <div className="d-flex align-items-start">
                                                <div className="bg-info bg-opacity-10 rounded p-2 me-3">
                                                    <small className="text-info fw-bold">JAN<br />05</small>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="fw-bold mb-1">Campus WiFi Upgrade Complete</h6>
                                                    <p className="text-muted small mb-2">High-speed internet connectivity now covers entire campus including hostels.</p>
                                                    <small className="text-info">Read More →</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="list-group-item border-0 p-3">
                                            <div className="d-flex align-items-start">
                                                <div className="bg-danger bg-opacity-10 rounded p-2 me-3">
                                                    <small className="text-danger fw-bold">JAN<br />03</small>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="fw-bold mb-1">Research Paper Published in Nature</h6>
                                                    <p className="text-muted small mb-2">Faculty research on renewable energy featured in prestigious scientific journal.</p>
                                                    <small className="text-danger">Read More →</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Middle Column - Admissions & Announcements */}
                        <div className="col-lg-4">
                            {/* Admission Updates */}
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header bg-success text-white">
                                    <h4 className="fw-bold mb-0">🎓 Admission Updates</h4>
                                </div>
                                <div className="card-body">
                                    <div className="bg-success bg-opacity-10 rounded p-3 mb-3">
                                        <h5 className="fw-bold text-success mb-2">🔥 Admissions Open 2025-26</h5>
                                        <p className="small mb-2">Applications now open for UG & PG programs</p>
                                        <div className="d-flex justify-content-between text-small">
                                            <span>Deadline: <strong>March 15, 2025</strong></span>
                                            <a href="#" className="text-success">Apply Now</a>
                                        </div>
                                    </div>

                                    <div className="border-start border-3 border-primary ps-3 mb-3">
                                        <h6 className="fw-bold">Engineering Programs</h6>
                                        <ul className="list-unstyled small">
                                            <li>• Computer Science & Engineering</li>
                                            <li>• Electronics & Communication</li>
                                            <li>• Mechanical Engineering</li>
                                            <li>• Civil Engineering</li>
                                        </ul>
                                    </div>

                                    <div className="border-start border-3 border-info ps-3 mb-3">
                                        <h6 className="fw-bold">Management Programs</h6>
                                        <ul className="list-unstyled small">
                                            <li>• MBA - Finance</li>
                                            <li>• MBA - Marketing</li>
                                            <li>• MBA - Human Resources</li>
                                        </ul>
                                    </div>

                                    <div className="bg-warning bg-opacity-10 rounded p-2">
                                        <small className="text-warning fw-bold">⚡ Limited Seats Available</small>
                                    </div>
                                </div>
                            </div>

                            {/* Important Announcements */}
                            <div className="card border-0 shadow-sm">
                                <div className="card-header bg-warning text-dark">
                                    <h5 className="fw-bold mb-0">📢 Important Announcements</h5>
                                </div>
                                <div className="card-body p-0">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item d-flex align-items-center">
                                            <span className="badge bg-danger me-2">New</span>
                                            <span className="small">Hostel fee payment deadline extended to Jan 20</span>
                                        </div>
                                        <div className="list-group-item d-flex align-items-center">
                                            <span className="badge bg-primary me-2">Alert</span>
                                            <span className="small">Library closed on Jan 26 for Republic Day</span>
                                        </div>
                                        <div className="list-group-item d-flex align-items-center">
                                            <span className="badge bg-success me-2">Info</span>
                                            <span className="small">New student ID cards ready for collection</span>
                                        </div>
                                        <div className="list-group-item d-flex align-items-center">
                                            <span className="badge bg-warning text-dark me-2">Update</span>
                                            <span className="small">Semester results will be declared on Jan 30</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Exam Schedule & Academic Calendar */}
                        <div className="col-lg-4">
                            {/* Upcoming Exams */}
                            <div className="card border-0 shadow-sm mb-4">
                                <div className="card-header bg-danger text-white">
                                    <h4 className="fw-bold mb-0">📚 Upcoming Exams</h4>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                                            <div>
                                                <h6 className="fw-bold mb-0">Mid-Term Examinations</h6>
                                                <small className="text-muted">All Semesters</small>
                                            </div>
                                            <span className="badge bg-danger">Feb 1-15</span>
                                        </div>
                                    </div>

                                    <div className="accordion accordion-flush" id="examAccordion">
                                        <div className="accordion-item border-0">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#sem1">
                                                    <strong>Semester 1 & 2</strong>
                                                </button>
                                            </h2>
                                            <div id="sem1" className="accordion-collapse collapse" data-bs-parent="#examAccordion">
                                                <div className="accordion-body p-2 small">
                                                    <div className="row">
                                                        <div className="col-8">Mathematics-I</div>
                                                        <div className="col-4 text-end">Feb 1</div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">Physics</div>
                                                        <div className="col-4 text-end">Feb 3</div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">Chemistry</div>
                                                        <div className="col-4 text-end">Feb 5</div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">Programming Basics</div>
                                                        <div className="col-4 text-end">Feb 7</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item border-0">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#sem3">
                                                    <strong>Semester 3 & 4</strong>
                                                </button>
                                            </h2>
                                            <div id="sem3" className="accordion-collapse collapse" data-bs-parent="#examAccordion">
                                                <div className="accordion-body p-2 small">
                                                    <div className="row">
                                                        <div className="col-8">Data Structures</div>
                                                        <div className="col-4 text-end">Feb 2</div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">Database Management</div>
                                                        <div className="col-4 text-end">Feb 4</div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">Computer Networks</div>
                                                        <div className="col-4 text-end">Feb 6</div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">Operating Systems</div>
                                                        <div className="col-4 text-end">Feb 8</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item border-0">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed p-2" type="button" data-bs-toggle="collapse" data-bs-target="#sem5">
                                                    <strong>Semester 5 & 6</strong>
                                                </button>
                                            </h2>
                                            <div id="sem5" className="accordion-collapse collapse" data-bs-parent="#examAccordion">
                                                <div className="accordion-body p-2 small">
                                                    <div className="row">
                                                        <div className="col-8">Software Engineering</div>
                                                        <div className="col-4 text-end">Feb 9</div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">Machine Learning</div>
                                                        <div className="col-4 text-end">Feb 11</div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">Web Technologies</div>
                                                        <div className="col-4 text-end">Feb 13</div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-8">Mobile App Dev</div>
                                                        <div className="col-4 text-end">Feb 15</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 p-2 bg-light rounded">
                                        <small className="text-muted">
                                            <strong>📝 Exam Guidelines:</strong><br />
                                            • Report 30 minutes before exam time<br />
                                            • Bring valid student ID<br />
                                            • Check seating arrangement on notice board
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Academic Calendar Widget */}
                        <div className="card border-0 shadow-sm">
                            <div className="card-header bg-info text-white">
                                <h5 className="fw-bold mb-0">📅 Academic Calendar</h5>
                            </div>
                            <div className="card-body p-3">
                                <div className="calendar-widget">
                                    <div className="text-center mb-3">
                                        <h6 className="fw-bold">January 2025</h6>
                                    </div>

                                    <div className="row g-1 text-center small">
                                        <div className="col fw-bold">S</div>
                                        <div className="col fw-bold">M</div>
                                        <div className="col fw-bold">T</div>
                                        <div className="col fw-bold">W</div>
                                        <div className="col fw-bold">T</div>
                                        <div className="col fw-bold">F</div>
                                        <div className="col fw-bold">S</div>
                                    </div>

                                    <div className="row g-1 text-center small">
                                        <div className="col text-muted">29</div>
                                        <div className="col text-muted">30</div>
                                        <div className="col text-muted">31</div>
                                        <div className="col">1</div>
                                        <div className="col">2</div>
                                        <div className="col">3</div>
                                        <div className="col">4</div>
                                    </div>

                                    <div className="row g-1 text-center small">
                                        <div className="col">5</div>
                                        <div className="col">6</div>
                                        <div className="col">7</div>
                                        <div className="col">8</div>
                                        <div className="col">9</div>
                                        <div className="col">10</div>
                                        <div className="col">11</div>
                                    </div>

                                    <div className="row g-1 text-center small">
                                        <div className="col">12</div>
                                        <div className="col bg-primary text-white rounded">13</div>
                                        <div className="col">14</div>
                                        <div className="col bg-success text-white rounded">15</div>
                                        <div className="col">16</div>
                                        <div className="col">17</div>
                                        <div className="col">18</div>
                                    </div>

                                    <div className="row g-1 text-center small">
                                        <div className="col">19</div>
                                        <div className="col bg-warning text-dark rounded">20</div>
                                        <div className="col">21</div>
                                        <div className="col">22</div>
                                        <div className="col">23</div>
                                        <div className="col">24</div>
                                        <div className="col">25</div>
                                    </div>

                                    <div className="row g-1 text-center small mb-3">
                                        <div className="col">26</div>
                                        <div className="col">27</div>
                                        <div className="col">28</div>
                                        <div className="col">29</div>
                                        <div className="col">30</div>
                                        <div className="col">31</div>
                                        <div className="col text-muted">1</div>
                                    </div>

                                    {/* Calendar Legend */}
                                    <div className="mt-3">
                                        <div className="d-flex flex-wrap gap-2 small">
                                            <div className="d-flex align-items-center">
                                                <div className="bg-primary rounded me-1" style={{ width: '12px', height: '12px' }}></div>
                                                <span>Exam</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="bg-success rounded me-1" style={{ width: '12px', height: '12px' }}></div>
                                                <span>Assignment Due</span>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="bg-warning rounded me-1" style={{ width: '12px', height: '12px' }}></div>
                                                <span>Holiday</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Upcoming Events */}
                                    <div className="mt-3">
                                        <h6 className="fw-bold mb-2">Upcoming Events</h6>
                                        <div className="small">
                                            <div className="d-flex justify-content-between mb-1">
                                                <span>📝 Physics Exam</span>
                                                <span className="text-muted">Jan 13</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-1">
                                                <span>📋 Math Assignment</span>
                                                <span className="text-muted">Jan 15</span>
                                            </div>
                                            <div className="d-flex justify-content-between mb-1">
                                                <span>🎉 Republic Day</span>
                                                <span className="text-muted">Jan 20</span>
                                            </div>
                                        </div>
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

export default Blog