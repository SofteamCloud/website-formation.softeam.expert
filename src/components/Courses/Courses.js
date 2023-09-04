import React from 'react';
import Tutorial from './Tutorial';
import tutorialData from '../../data/tutorialData';
import './Courses.css';
import { Link } from 'react-router-dom';

function Courses() {
    return (
        <main className="course">
            <h2>Our courses</h2>
            <p>At Softeam, we believe in the relentless pursuit of knowledge. Recognizing the rapidly evolving tech landscape, we introduced the Softeam Self Learning Service - a dedicated platform for our team members. This service offers a comprehensive range of courses and tutorials tailored for those eager to stay at the forefront of technology.</p>

            <ul className="tutorials">
                {tutorialData.map((tutorial) => (
                    <Tutorial tutorialObj={tutorial} key={tutorial.name} />
                ))}
            </ul>
            <div>
                <Link to="/category">
                    <button className="btn">Happy Learning!</button>
                </Link>
            </div>
        </main>
    );
}

export default Courses;
