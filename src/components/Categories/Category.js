import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';  // Import the CSS file

function Category() {
    const courses = ['aws', 'terraform', 'kubernetes', 'gitlab'];

    return (
        <div>
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
