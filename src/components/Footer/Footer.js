import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p>Copyright © {new Date().getFullYear()} Softeam.</p>
            <p>Website developed by Minh Hung Phan.</p>
            <p>Contact us: <a href="mailto:ld-cloud@softeam.fr">ld-cloud@softeam.fr</a></p>
        </div>
    );
}

export default Footer;