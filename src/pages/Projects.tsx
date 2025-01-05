import React from 'react';
import { ExternalLink, Github, Text } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online shopping platform built with React and Node.js',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    {
        title: 'Task Management App',
        description: 'A productivity app for managing daily tasks and projects',
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather information with interactive maps',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
        github: 'https://github.com',
        demo: 'https://demo.com'
    }
];

export function Projects() {
    const { t } = useTranslation();

    return (
        <div className="py-20 bg-gray-50" id="projects">
            <div className="max-w-6xl mx-auto px-4">
                <a href="#rojects">
                    <h2 className="text-4xl font-bold text-center mb-12">{t('projects.title')}</h2>
                </a>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center text-gray-700 hover:text-blue-500"
                                    >
                                        <Text size={20} className="mr-2" />
                                        {t('projects.viewBlogPost')}
                                    </a>
                                    <a
                                        href={project.github}
                                        className="flex items-center text-gray-700 hover:text-blue-500"
                                    >
                                        <Github size={20} className="mr-2" />
                                        {t('projects.viewCode')}
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center text-gray-700 hover:text-blue-500"
                                    >
                                        <ExternalLink size={20} className="mr-2" />
                                        {t('projects.viewDemo')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
