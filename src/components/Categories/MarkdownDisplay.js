import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useParams } from 'react-router-dom';
import 'github-markdown-css/github-markdown.css'; // GitHub markdown styling
import './MarkdownDisplay.css';

function MarkdownDisplay() {
    const { courseName, level, mdFileName } = useParams();
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        const filePath = `/courses/${courseName}/${level}/${mdFileName}.md`;

        console.log('Fetching from:', filePath);

        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch markdown file: ${response.statusText}`);
                }
                return response.text();
            })
            .then(text => setMarkdown(text))
            .catch(error => {
                console.error(error);
                setMarkdown('Failed to load content.');
            });
    }, [courseName, level, mdFileName]);

    // Custom renderer for headings to ensure they have correct ids
    const renderHeading = (children, level) => {
        const text = children[0];
        const slug = text.toLowerCase().replace(/\W/g, '-'); // Replace non-alphanumeric chars with hyphens
        return React.createElement(`h${level}`, { id: slug }, children);
    };

    return (
        <div className="markdown-body">
            <ReactMarkdown
                remarkPlugins={[gfm]}
                children={markdown}
                components={{
                    // Syntax highlighting for code blocks
                    code: ({ node, inline, className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '');
                        return match
                            ? <SyntaxHighlighter style={dracula} language={match[1]} children={String(children).replace(/\n$/, '')} {...props} />
                            : <code className={className} {...props}>{String(children).replace(/\n$/, '')}</code>;
                    },
                    // Handling headings to add ids
                    h1: ({ children }) => renderHeading(children, 1),
                    h2: ({ children }) => renderHeading(children, 2),
                    h3: ({ children }) => renderHeading(children, 3),
                    h4: ({ children }) => renderHeading(children, 4),
                    h5: ({ children }) => renderHeading(children, 5),
                    h6: ({ children }) => renderHeading(children, 6),
                }}
                transformImageUri={uri => {
                    return `${process.env.PUBLIC_URL}/courses/${courseName}/${level}/${uri}`;
                }}
            />
        </div>
    );
}

export default MarkdownDisplay;




