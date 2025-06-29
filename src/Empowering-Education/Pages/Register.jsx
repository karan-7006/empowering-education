import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavHeader from '../Common/NavHeader';
import Footer from '../Common/Footer';

export default function Register() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log('Registering:', { name, email, password });

        // Navigate to login page after successful registration simulation
        navigate('/Login');
    };

    return (
        <div>
            <div
                className="min-vh-100 d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="bg-primary-subtle p-5 shadow" style={{ width: '100%', maxWidth: '600px', borderRadius:'50px' }}>
                    <h2 className="text-center display-5 fw-bold mb-4 text-primary">
                        <u>Register</u>
                    </h2>

                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-semibold">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Register
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <p className="text-muted">
                            Already have an account?{' '}
                            <NavLink to="/Login" className="text-decoration-none text-primary">
                                Login
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
