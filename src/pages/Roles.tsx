import React from 'react';
import { Code2, Palette, Terminal, Server, Database, Eye, Bug, ClipboardList, BookOpen, Headphones, Shield, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const roles = [
    {
        title: 'roles.frontend.title',
        description: 'roles.frontend.description',
        icon: <Code2 className="text-blue-500" size={32} />,
        bgColor: 'bg-blue-100',
    },
    {
        title: 'roles.backend.title',
        description: 'roles.backend.description',
        icon: <Terminal className="text-green-500" size={32} />,
        bgColor: 'bg-green-100',
    },
    {
        title: 'roles.design.title',
        description: 'roles.design.description',
        icon: <Palette className="text-purple-500" size={32} />,
        bgColor: 'bg-purple-100',
    },
    {
        title: 'roles.database.title',
        description: 'roles.database.description',
        icon: <Database className="text-yellow-500" size={32} />,
        bgColor: 'bg-yellow-100',
    },
    {
        title: 'roles.devops.title',
        description: 'roles.devops.description',
        icon: <Server className="text-red-500" size={32} />,
        bgColor: 'bg-red-100',
    },
    {
        title: 'roles.observability.title',
        description: 'roles.observability.description',
        icon: <Eye className="text-orange-500" size={32} />,
        bgColor: 'bg-orange-100',
    },
    {
        title: 'roles.security.title',
        description: 'roles.security.description',
        icon: <Shield className="text-cyan-500" size={32} />,
        bgColor: 'bg-cyan-100',
    },
    {
        title: 'roles.tester.title',
        description: 'roles.tester.description',
        icon: <Bug className="text-pink-500" size={32} />,
        bgColor: 'bg-pink-100',
    },
    {
        title: 'roles.documentation_teaching.title',
        description: 'roles.documentation_teaching.description',
        icon: <BookOpen className="text-indigo-500" size={32} />,
        bgColor: 'bg-indigo-100',
    },
    {
        title: 'roles.business_requirements.title',
        description: 'roles.business_requirements.description',
        icon: <ClipboardList className="text-teal-500" size={32} />,
        bgColor: 'bg-teal-100',
    },
    {
        title: 'roles.project_management.title',
        description: 'roles.project_management.description',
        icon: <Briefcase className="text-brown-500" size={32} />,
        bgColor: 'bg-brown-100',
    },
    {
        title: 'roles.customer_support.title',
        description: 'roles.customer_support.description',
        icon: <Headphones className="text-gray-500" size={32} />,
        bgColor: 'bg-gray-100',
    },
];

export function Role() {
    const { t } = useTranslation();

    return (
        <div className="py-20 bg-white" id="roles">
            <div className="max-w-6xl mx-auto px-4">
                <a href="#roles">
                    <h2 className="text-4xl font-bold text-center mb-12">{t('roles.title')}</h2>
                </a>
                <div className="grid md:grid-cols-3 gap-8">
                    {roles.map((skill, index) => (
                        <div key={index} className="text-center p-6">
                            <div className={`w-16 h-16 ${skill.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{t(skill.title)}</h3>
                            <p className="text-gray-600">{t(skill.description)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
