# Course Directory Metadata Consolidation

## Introduction

This guide introduces a Node.js script designed for educators and developers working with online course materials. The script organizes and consolidates metadata for courses stored in a specific directory structure. By automating the process of creating a comprehensive metadata file, this script simplifies course management and enhances accessibility.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Script Explanation](#script-explanation)
- [Example Usage](#example-usage)
- [Conclusion](#conclusion)
- [References](#references)

## Project Overview

The script reads directories representing courses and their respective levels (like 'aws/fundamental'). It then creates a JSON file (`coursesMetadata.json`) containing a structured overview of all courses, their levels, and associated markdown topic files.

## Getting Started

### Prerequisites

- Node.js installed on your system.
- A basic understanding of JavaScript and file system operations in Node.js.

### Installation

Clone the repository containing the script or create a new Node.js project and include the provided script in your project.

## Script Explanation

The script operates in several steps:

1. **Importing Modules**: Uses Node.js `fs` (file system) module for file operations and `path` module for handling file paths.
2. **Setting Up Directory Path**: Determines the path to the courses directory relative to the script's location.
3. **Initializing Metadata Object**: Starts with an empty object to store consolidated course information.
4. **Reading Course Directories**: Iterates over each course directory and constructs an object containing course names and levels.
5. **Processing Level Directories**: For each course, it iterates over level directories, capturing the level names and markdown topics.
6. **Writing Metadata to JSON**: Finally, writes the consolidated metadata object to a JSON file within the courses directory.

## Example Usage

### Directory Structure

```
project/
│
└───public/
    └───courses/
        ├───aws/
        │   ├───fundamental/
        │   └───professional/
        └───terraform/
            └───essential/
```

### Running the Script

- **Execute the Script**: Navigate to your project directory in the terminal and run the script with the command `node scripts/updateMetadata.js`. This will process the directories and create the metadata file.

- **Verify the Output**: After running the script, check the `public/courses` directory for the generated `coursesMetadata.json` file. This file contains the structured metadata of your courses and levels.

### Output Example

`coursesMetadata.json` will have a structure similar to:

```json
{
  "courses": [
    {
      "name": "aws",
      "levels": [
        {
          "name": "fundamental",
          "topics": ["intro.md", "setup.md"]
        },
        {
          "name": "professional",
          "topics": ["advancedConfig.md"]
        }
      ]
    },
    {
      "name": "terraform",
      "levels": [
        {
          "name": "essential",
          "topics": ["basics.md", "deployment.md"]
        }
      ]
    }
  ]
}
```

## Conclusion

This script provides a practical solution for managing course content, offering a clear and structured overview of available educational resources. It is particularly useful for organizations or individuals handling a large number of courses with varying complexity levels.

## References

- [Node.js documentation: `fs`](https://nodejs.org/api/fs.html)
- [Node.js documentation: `path`](https://nodejs.org/api/path.html)