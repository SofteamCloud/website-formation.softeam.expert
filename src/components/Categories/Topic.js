import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Topic.css';

function Topic() {
    const { courseName, level } = useParams();
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        // Fetch coursesMetadata.json to get the list of topics for the selected course and level
        fetch('/courses/coursesMetadata.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch coursesMetadata.json: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                // Find the selected course
                const selectedCourse = data.courses.find(course => course.name === courseName);
                if (selectedCourse) {
                    // Find the selected level within that course
                    const selectedLevel = selectedCourse.levels.find(lvl => lvl.name === level);
                    if (selectedLevel && Array.isArray(selectedLevel.topics)) {
                        setTopics(selectedLevel.topics);
                    }
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, [courseName, level]);

    return (
        <div className='topic'>
            <h1>{level.toUpperCase()}</h1>
            <ul>
                {topics.map(topic => (
                    <li key={topic}>
                        <Link to={`/${courseName}/${level}/${topic.replace('.md', '')}`}>
                            {topic.replace('.md', '')}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Topic;
