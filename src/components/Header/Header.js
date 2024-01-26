import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>Softeam Self Service Learning</h1>
            </Link>
        </header>
    );
}

export default Header;
