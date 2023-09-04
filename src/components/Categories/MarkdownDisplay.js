import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useParams } from 'react-router-dom';
import 'github-markdown-css/github-markdown.css'; // GitHub markdown styling

function MarkdownDisplay() {
    const { courseName, level, mdFileName } = useParams();
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        const filePath = `/courses/${courseName}/${level}/${mdFileName}.md`;
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

    const renderers = {
        code: ({ language, value }) => {
            return <SyntaxHighlighter language={language} children={value} />;
        },
    };

    return (
        <div className="markdown-body">
            <ReactMarkdown
                remarkPlugins={[gfm]}
                children={markdown}
                components={{
                    code: ({ node, inline, className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '');
                        return match
                            ? <SyntaxHighlighter language={match[1]} children={String(children).replace(/\n$/, '')} {...props} />
                            : <code className={className} {...props} >{String(children).replace(/\n$/, '')}</code>;
                    }
                }}
            />
        </div>
    );
}

export default MarkdownDisplay;



