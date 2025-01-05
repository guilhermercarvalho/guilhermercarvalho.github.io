import React from "react";
import { useTranslation } from "react-i18next";

const categorizedSkills = {
    languages: [
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Java" },
        { name: "Python" },
        { name: "PHP" },
    ].map(skill => ({ ...skill, icon: skill.name.replace(/[\s.]+/g, '_').toLowerCase() })),
    frameworks: [
        { name: "React" },
        { name: "Node.js" },
        { name: "Vite" },
        { name: "Tailwind CSS" },
        { name: "Bootstrap" },
    ].map(skill => ({ ...skill, icon: skill.name.replace(/[\s.]+/g, '_').toLowerCase() })),
    databases: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "Redis" },
        { name: "SQLite" },
    ].map(skill => ({ ...skill, icon: skill.name.replace(/[\s.]+/g, '_').toLowerCase() })),
    devops: [
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "Jenkins" },
        { name: "Ansible" },
        { name: "Grafana" },
    ].map(skill => ({ ...skill, icon: skill.name.replace(/[\s.]+/g, '_').toLowerCase() })),
    others: [
        { name: "Linux" },
        { name: "Git" },
        { name: "RabbitMQ" },
        { name: "Kafka" },
        { name: "Swagger" },
    ].map(skill => ({ ...skill, icon: skill.name.replace(/[\s.]+/g, '_').toLowerCase() })),
};

const Skills: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div id="skills" className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">{t('skills.title')}</h1>
                {Object.entries(categorizedSkills).map(([category, skills]) => (
                    <div key={category} className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            {t(`skills.categories.${category}`)}
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
                                >
                                    <img
                                        src={`https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/${skill.icon}.png`}
                                        alt={skill.name}
                                        title={skill.name}
                                        className="w-12 h-12 mb-4"
                                    />
                                    <span className="text-lg font-medium text-gray-700">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
