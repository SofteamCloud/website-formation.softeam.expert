import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo-softeam" src="/logos/softeam_white_transparent_logo.png" alt="logo" />
            </div>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>Self Service Learning</h1>
            </Link>
        </header>
    );
}

export default Header;
