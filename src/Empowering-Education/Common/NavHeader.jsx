import React from 'react'

function NavHeader({title}) {
    return (
        <div
            className="position-relative text-white d-flex align-items-center justify-content-center"
            style={{
                minHeight: '70vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}
        >
            {/* Overlay for better text readability */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)'
                }}
            ></div>            

            <div className="container text-center position-relative z-3">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h1
                            className="display-2 fw-bold mb-4"
                            style={{
                                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                                animation: 'slideInUp 1s ease-out'
                            }}
                        >
                            {title}
                        </h1>
                        <p
                            className="lead fw-bold fs-3 mb-5"
                            style={{
                                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                                animation: 'slideInUp 1s ease-out 0.3s both'
                            }}
                        >
                            Transforming Learning, Empowering Futures
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavHeader
