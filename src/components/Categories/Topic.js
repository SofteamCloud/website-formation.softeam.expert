import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Topic() {
    const { courseName, level } = useParams();
    const [files, setFiles] = useState([]);

    useEffect(() => {
        if (courseName === 'aws' && level === 'fundamental') {
            setFiles(['What is an EC2.md', 'Working with S3.md']);
        }

        // Add similar conditions for other courses and levels...
        if (courseName === 'terraform' && level === 'essential') {
            setFiles(['terraform-setup.md']);
        }
    }, [courseName, level]);

    return (
        <div>
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


