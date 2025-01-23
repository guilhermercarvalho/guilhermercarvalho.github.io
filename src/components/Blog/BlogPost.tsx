import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import { Note } from '../../types/note';
import notes from '../../data/blog/notes.json'
import config from '../../environment/gitlab-api-auth.json'

const { GITLAB_API_URL, PROJECT_ID, GITLAB_TOKEN } = config

const BlogPost = () => {
    const { id } = useParams<{ id: string }>();
    const [content, setContent] = useState<string | null>(null);
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const filePath = (notes as Note[]).find((n) => n.id === Number(id))?.path || '';
                const branch = 'main';

                const url = `${GITLAB_API_URL}/projects/${PROJECT_ID}/repository/files/${encodeURIComponent(filePath)}/raw?ref=${branch}`;

                const response = await fetch(url, {
                    headers: {
                        'PRIVATE-TOKEN': GITLAB_TOKEN,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to load the Markdown file');
                }

                const markdown = await response.text();
                setContent(marked(markdown, { async: false })); // Convert Markdown to HTML
                setTitle(filePath.split('/').pop()?.replace(/-/g, ' ') || '');
            } catch (error) {
                console.error(error);
                setContent(null);
            }
        };

        fetchMarkdown();
    }, [id]);

    if (!content) return <div>Post not found.</div>;

    return (
        <div className="pt-16 max-w-6xl mx-auto px-4 px-10">
            <div className="flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl font-bold my-4 text-center">{title}</h1>
                <div
                    className="prose max-w-4xl w-full"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
};

export default BlogPost;
