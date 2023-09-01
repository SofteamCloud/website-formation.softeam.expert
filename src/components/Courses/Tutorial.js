import React from 'react';
import './Tutorial.css';

function Tutorial({ tutorialObj }) {
    return (
        <li className="tutorial">
            <img src={tutorialObj.photoName} alt={tutorialObj.name} />
            <div>
                <h3>{tutorialObj.name}</h3>
                <p>{tutorialObj.overview}</p>
            </div>
        </li>
    );
}

export default Tutorial;

