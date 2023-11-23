import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Level.css';

function Level() {
    const { courseName } = useParams();
    const [levels, setLevels] = useState([]);

    // Hardcoded example: const levels = ['fundamental', 'essential', 'professional'];

    useEffect(() => {
        // Fetch coursesMetadata.json to get the list of levels for the selected course
        fetch('/courses/coursesMetadata.json')
            .then(response => response.json())
            .then(data => {
                // Find the selected course and extract its levels
                const selectedCourse = data.courses.find(course => course.name === courseName);
                if (selectedCourse && Array.isArray(selectedCourse.levels)) {
                    const levelNames = selectedCourse.levels.map(level => level.name);
                    setLevels(levelNames);
                }
            })
            .catch(error => {
                console.error("Error fetching levels metadata:", error);
            });
    }, [courseName]);

    return (
        <div className='level'>
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

