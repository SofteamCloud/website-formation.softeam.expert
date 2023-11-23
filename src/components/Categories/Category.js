import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

function Category() {

    // Hardcoded example: const courses = ['aws', 'terraform', 'kubernetes', 'gitlab'];

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch coursesMetadata.json to get the list of courses
        fetch('/courses/coursesMetadata.json')
            .then(response => response.json())
            .then(data => {
                // Extract course names from the coursesMetadata and set them to state
                if (data.courses && Array.isArray(data.courses)) {
                    const courseNames = data.courses.map(course => course.name);
                    setCourses(courseNames);
                }
            })
            .catch(error => {
                console.error("Error fetching courses metadata:", error);
            });
    }, []);

    return (
        <div className='category'>
            <h1>Courses List</h1>
            <ul>
                {courses.map(course => (
                    <li key={course}>
                        <Link to={`/${course.replace(/\s+/g, '-')}`}>{course}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Category;
