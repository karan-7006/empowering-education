import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark-subtle text-white pt-5 pb-4">
            <div className="container text-md-left">
                <div className="row text-md-left">
                    {/* Brand and Description */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase fw-bold mb-4" style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                            Empowering Education (E²)
                        </h5>
                        <p className="text-muted">
                            A collaborative platform connecting students through resource sharing and community support.
                        </p>
                        <div className="d-flex mt-3">
                            <a href="#" className="me-3 text-primary text-decoration-none fs-5"><i className="bi bi-facebook" /></a>
                            <a href="#" className="me-3 text-primary text-decoration-none fs-5"><i className="bi bi-instagram" /></a>
                            <a href="#" className="text-primary text-decoration-none fs-5"><i className="bi bi-twitter-x" /></a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase text-muted fw-semibold mb-4">Quick Links</h6>
                        <p><a href="aboutus.html" className="text-muted text-decoration-none">About Us</a></p>
                        <p><a href="Contact.html" className="text-muted text-decoration-none">Contact</a></p>
                        <p><a href="#" className="text-muted text-decoration-none">Privacy Policy</a></p>
                        <p><a href="#" className="text-muted text-decoration-none">Terms of Service</a></p>
                    </div>
                    {/* Resources */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase text-muted fw-semibold mb-4">Resources</h6>
                        <p><a href="#" className="text-muted text-decoration-none">Academic Calendar</a></p>
                        <p><a href="#" className="text-muted text-decoration-none">Campus Events</a></p>
                        <p><a href="#" className="text-muted text-decoration-none">Internship Opportunities</a></p>
                        <p><a href="#" className="text-muted text-decoration-none">Student Handbook</a></p>
                    </div>
                    {/* Contact */}
                    <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase text-muted fw-semibold mb-4">Contact</h6>
                        <p className="text-muted"><i className="bi bi-envelope me-2 text-primary" /> support@empoweringeducation.com</p>
                        <p className="text-muted"><i className="bi bi-telephone me-2 text-success" /> +1 (555) 123-4567</p>
                    </div>
                </div>
                {/* Divider */}
                <hr className="mb-4 mt-5 border-light" />
                {/* Footer Bottom */}
                <div className="row align-items-center text-center">
                    <div className="col-md-12">
                        <p className="text-muted mb-0">© 2024 <strong>Empowering Education (E²)</strong>. All rights reserved.</p>
                        <p className="text-muted small mt-1">Developed with ❤️ by Students, For Students</p>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer
