const fs = require('fs');
const path = require('path');

const coursesDirectory = path.join(__dirname, '../public/courses');

let consolidatedMetadata = {
    courses: []
};

// Iterate over each course (e.g., aws, terraform)
fs.readdirSync(coursesDirectory).forEach(course => {
    const coursePath = path.join(coursesDirectory, course);

    // Check if it's a directory, if not, skip this iteration
    if (!fs.statSync(coursePath).isDirectory()) {
        return; // Skip non-directory items
    }

    let courseMetadata = {
        name: course,
        levels: []
    };

    // Iterate over each level (e.g., fundamental, essential, professional)
    fs.readdirSync(coursePath).forEach(level => {
        const levelPath = path.join(coursePath, level);

        // Check if it's a directory
        if (fs.statSync(levelPath).isDirectory()) {

            // List all markdown files in the current level
            const markdownFiles = fs.readdirSync(levelPath).filter(file => file.endsWith('.md'));

            let levelMetadata = {
                name: level,
                topics: markdownFiles
            };

            courseMetadata.levels.push(levelMetadata);
        }
    });

    consolidatedMetadata.courses.push(courseMetadata);
});

// Write to metadata.json in the courses directory
fs.writeFileSync(path.join(coursesDirectory, 'coursesMetadata.json'), JSON.stringify(consolidatedMetadata, null, 2));


