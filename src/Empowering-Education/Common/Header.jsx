import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {

    const redirect = useNavigate()

    useEffect(()=> {
        if(!localStorage.getItem("userId")) {
            redirect("/Login")
        }
    })

    const logout = ()=> {
        localStorage.removeItem("userId")
        localStorage.removeItem("username")
        redirect("/Login")
        toast.success("Logout SuccessFully")
    }

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
                                <NavLink className="nav-link text-dark fw-semibold" to="/Blog">Blogs</NavLink>
                            </li>
                            
                        </ul>

                        {
                        (()=> {
                            if (localStorage.getItem("userId")) {
                                return (
                                    <NavLink className="nav-item nav-link fw-semibold text-primary" to="/UserEdit">Hello- {localStorage.getItem("username")}</NavLink>
                                )
                            }
                        })()
                    }
                    {
                        (()=> {
                            if (localStorage.getItem("userId")) {
                                return (
                                    <NavLink onClick={logout} className="nav-item nav-link ms-3 me-3 fw-semibold" to="#">User-Logout</NavLink>
                                )
                            }

                            else{
                                return(
                                    <NavLink to="/Login">User-Login</NavLink>
                                )
                            }

                        })()
                    }

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
