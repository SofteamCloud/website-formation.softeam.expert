import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Level() {
    const { courseName } = useParams();
    const levels = ['fundamental', 'essential', 'professional'];

    return (
        <div>
            <h1>{courseName.toUpperCase()}</h1>
            <ul>
                {levels.map(level => (
                    <li key={level}>
                        <Link to={`/${courseName}/${level}`}>{level}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Level;