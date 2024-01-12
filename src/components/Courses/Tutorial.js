import React from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css';

function Tutorial({ tutorialObj }) {
    return (
        <li className="tutorial">
            <Link to={tutorialObj.path}>
                <img src={tutorialObj.photoName} alt={tutorialObj.name} />
            </Link>
            <div>
                <Link to={tutorialObj.path}>
                    <h3>{tutorialObj.name}</h3>
                </Link>
                <p>{tutorialObj.overview}</p>
            </div>
        </li>
    );
}

export default Tutorial;

