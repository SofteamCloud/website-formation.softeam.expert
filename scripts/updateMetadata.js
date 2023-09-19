const fs = require('fs');
const path = require('path');

// Adjust the path for the courses directory
const coursesDirectory = path.join(__dirname, '../public/courses');

// Iterate over each course (e.g., aws, terraform)
fs.readdirSync(coursesDirectory).forEach(course => {
    const coursePath = path.join(coursesDirectory, course);

    // Iterate over each level (e.g., fundamental, essential, professional)
    fs.readdirSync(coursePath).forEach(level => {
        const levelPath = path.join(coursePath, level);

        // Check if it's a directory
        if (fs.statSync(levelPath).isDirectory()) {

            // List all markdown files in the current level
            const markdownFiles = fs.readdirSync(levelPath).filter(file => file.endsWith('.md'));

            // Create metadata object
            const metadata = {
                topics: markdownFiles
            };

            // Write to metadata.json inside the respective level directory
            fs.writeFileSync(path.join(levelPath, 'metadata.json'), JSON.stringify(metadata, null, 2));
        }
    });
});
