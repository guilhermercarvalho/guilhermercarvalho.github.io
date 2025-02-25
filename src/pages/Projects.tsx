import React, { useEffect, useState } from 'react';
import { BookOpen, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GitHubProject } from '../types/github';
import { fetchProjects, getDemoUrl } from '../data/github-api';
import { getProjectSharedName } from '../data/projects-shared';


export function Projects() {
    const { t } = useTranslation();
    const [projects, setProjects] = useState<GitHubProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjectsEffect = async () => {
            try {
                const validRepos = await fetchProjects()
                setProjects(validRepos as GitHubProject[]);
                setError(null);
            } catch (error) {
                console.error('Failed to load projects:', error);
                setError(t('projects.loadError'));
                setProjects([]);
            } finally {
                setLoading(false);
            }
        }

        fetchProjectsEffect();
    }, [t])

    if (loading) {
        return (
            <div className="py-20 bg-gray-50 text-center">
                <div className="animate-spin inline-block w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-20 bg-gray-50 text-center text-red-600">
                {error}
            </div>
        );
    }

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
                                src={getProjectSharedName(project.name).imageUrl}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3
                                    className="text-xl font-semibold mb-2"
                                    title={getProjectSharedName(project.name).title}
                                >
                                    {getProjectSharedName(project.name).title}
                                </h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.html_url}
                                        className="flex items-center text-gray-700 hover:text-blue-500"
                                    >
                                        <Github size={20} className="mr-2" />
                                        {t('projects.viewCode')}
                                    </a>
                                    {getDemoUrl(project) && (
                                        <a
                                            href={getDemoUrl(project)}
                                            className="flex items-center text-gray-700 hover:text-blue-500"
                                        >
                                            <ExternalLink size={20} className="mr-2" />
                                            {t('projects.viewDemo')}
                                        </a>
                                    )}
                                    {getProjectSharedName(project.name).blogPost && (
                                        <a
                                            href={getProjectSharedName(project.name).blogPost || ''}
                                            className="flex items-center text-gray-700 hover:text-blue-500"
                                        >
                                            <BookOpen size={20} className="mr-2" />
                                            {t('projects.viewBlogPost')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
