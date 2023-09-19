# Course Content Management Guide

## Table of Contents

- [Adding New Markdown Files](#adding-new-markdown-files)
    - [Place the Markdown File](#1-place-the-markdown-file)
    - [Update Metadata](#2-update-metadata)
    - [Verify Changes](#3-verify-changes)
- [Removing Markdown Files](#removing-markdown-files)
    - [Delete the Markdown File](#1-delete-the-markdown-file)
    - [Update Metadata](#2-update-metadata)
- [Renaming Markdown Files](#renaming-markdown-files)
    - [Rename the Markdown File](#1-rename-the-markdown-file)
    - [Update Metadata](#2-update-metadata)
- [Important Tips](#important-tips)
- [Troubleshooting](#troubleshooting)
- [Final Notes](#final-notes)

## Adding New Markdown Files

### 1. Place the Markdown File

Place your new markdown file (e.g., `new-topic.md`) in the appropriate directory based on the course and level.

For example, if you're adding a new topic for AWS under the `fundamental` level, it should be placed in:

```
public/courses/aws/fundamental/new-topic.md
```

### 2. Update Metadata

Every level directory has a `metadata.json` file which lists out the available markdown files. You need to update this file to include your new markdown topic.

For the previous example, open `public/courses/aws/fundamental/metadata.json` and add your new markdown filename:

```json
{
    "topics": [
        "existing-topic1.md",
        "existing-topic2.md",
        "new-topic.md"
    ]
}
```

### 3. Verify Changes

After adding your markdown file and updating the metadata, navigate to the appropriate course and level in the application. You should see your new topic listed.

## Removing Markdown Files

### 1. Delete the Markdown File

Delete the markdown file from its directory.

### 2. Update Metadata

Remove the markdown filename from the `metadata.json` file in the corresponding level directory.

## Renaming Markdown Files

If you need to rename a markdown file:

### 1. Rename the Markdown File

Rename the file in its directory.

### 2. Update Metadata

Update the filename in the `metadata.json` file in the corresponding level directory to reflect the new name.

## Important Tips

- **Consistency**: Ensure markdown filenames follow a consistent naming convention. It's easier to manage and avoids confusion.
- **Images**: If your markdown file references images, place them in the same directory as the markdown file. Ensure relative paths are used in the markdown to reference them.
- **Code Highlighting**: Markdown supports code highlighting. To ensure your code is highlighted, use code blocks with the language specified:

\```javascript
// Your JS code here
\```

## Troubleshooting

- **Topic Not Displaying**: Ensure that you've updated the `metadata.json` correctly with the filename and that there are no typos.
- **Markdown File Not Found Errors**: If you encounter a 404 or file not found error, ensure that the path in `metadata.json` matches the actual file path.

## Final Notes

Always test your changes locally before pushing or deploying. This way, you can catch any issues or inconsistencies early on.

Happy coding! 🚀