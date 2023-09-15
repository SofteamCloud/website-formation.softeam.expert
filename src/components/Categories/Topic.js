import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Topic.css';

function Topic() {
    const { courseName, level } = useParams();
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const metadataPath = `/courses/${courseName}/${level}/metadata.json`;

        fetch(metadataPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch metadata file: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.topics && Array.isArray(data.topics)) {
                    setFiles(data.topics);
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
                {files.map(file => (
                    <li key={file}>
                        <Link to={`/${courseName}/${level}/${file.replace('.md', '')}`}>
                            {file.replace('.md', '')}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Topic;