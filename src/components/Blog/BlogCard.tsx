import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    id: number;
    title: string;
}

const BlogCard = ({ id, title }: Props) => (
    <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <Link to={`/blog/${id}`} className="text-blue-500 hover:underline">
            Ler mais
        </Link>
    </div>
);

export default BlogCard;
