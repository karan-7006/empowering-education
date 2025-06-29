import React from 'react'

function NavHeader({ title, subtitle }) {
    return (
        <div
            className="position-relative text-white d-flex align-items-center justify-content-center"
            style={{
                minHeight: '30vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundImage: 'url("https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}
        >
            {/* Overlay for better text readability */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: 'linear-gradient(rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))'
                }}
            ></div>

            <div className="container text-center position-relative z-3">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="mt-1 mb-1">
                            <div className="d-flex align-items-center justify-content-center shadow-sm p-4 gap-2">
                                <div className="display-1" role="img" aria-label="About Icon">
                                    🎓
                                </div>
                                <div className="text-center">
                                    <h1 className="display-3 fw-bold text-warning mb-1">
                                        {title}<span className="text-light">{subtitle}</span>
                                    </h1>
                                    <p className="lead fw-bold text-warning mb-0">
                                        Our <span className="text-light fw-semibold">Story</span>{" "}
                                        <span className="text-light fw-semibold">& Mission</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavHeader
