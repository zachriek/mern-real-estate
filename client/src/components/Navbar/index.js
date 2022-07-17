// React
import React from 'react';
import { DistributeVertical } from 'react-bootstrap-icons';
import { Link, useLocation } from 'react-router-dom';

// CSS
import './index.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-md fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Real Estate
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <DistributeVertical />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-md-auto">
                        <Link to="/#home" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                            Home
                        </Link>
                        <Link to="/#properties" className={`nav-link ${location.pathname === '/properties' ? 'active' : ''}`}>
                            Properties
                        </Link>
                        <Link to="/" className="nav-link ml-md-5">
                            Login
                        </Link>
                        <Link to="/" className="btn btn-primary shadow-sm mt-3 mt-md-0">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
