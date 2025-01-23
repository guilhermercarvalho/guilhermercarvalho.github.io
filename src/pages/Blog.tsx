import React from 'react';
import notes from '../data/blog/notes.json'; // Importa o arquivo JSON de notas
import BlogCard from '../components/Blog/BlogCard'; // Componente para exibir os cards
import { Note } from '../types/note';

const Blog = () => (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold my-4">Blog</h1>
        <div className="flex flex-wrap justify-center gap-6">
            {(notes as Note[]).map((note) => (
                <BlogCard key={note.id} id={note.id} title={note.title} />
            ))}
        </div>
    </div>
);

export default Blog
