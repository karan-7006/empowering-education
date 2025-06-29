import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import NavHeader from '../Common/NavHeader';
import Footer from '../Common/Footer';

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Example: grab values (you can later add validation or API calls)
        const username = e.target.username.value;
        const password = e.target.password.value;

        // For now, simulate login
        console.log('Logging in:', { username, password });

        // Redirect to home page
        navigate('/HomePage');
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
                    <h2
                        className="text-center display-5 fw-bold mb-4 text-primary"
                    >
                        <u>Login</u>
                    </h2>

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label fw-semibold">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="form-control"
                                placeholder="Enter your username"
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
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <a href="#" className="text-decoration-none text-primary">
                            Forgot Password?
                        </a>
                    </div>

                    <div className="text-center mt-3">
                        <p className="text-muted">
                            Don't have an account?{' '}
                            <NavLink to="/Register" className="text-decoration-none text-primary">
                                Register
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
