import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p>Copyright © {new Date().getFullYear()} Softeam. All rights reserved.</p>
            <p>This project is licensed under the WTFPL License.</p>
            <p>Website developed by Minh Hung Phan.</p>
            <p>Contact us: <a href="mailto:ld-cloud@softeam.fr">ld-cloud@softeam.fr</a></p>
        </div>
    );
}

export default Footer;