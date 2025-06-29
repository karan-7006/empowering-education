import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-sm bg-white border-bottom sticky-top">
                <div className="container">
                    <a className="navbar-brand fw-bold text-primary fs-4" style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', color: 'transparent' }} href="#">Empowering Education</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark fw-semibold" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark fw-semibold" to="/AboutUs">AboutUs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark fw-semibold" to="/ContactUs">ContactUs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark fw-semibold" to="/Login">Login</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 rounded-pill border-primary" type="search" placeholder="Search topics..." aria-label="Search" />
                            <button className="btn btn-primary rounded-pill px-4" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
