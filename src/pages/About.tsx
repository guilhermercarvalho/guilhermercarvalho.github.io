import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function About() {
    const { t } = useTranslation();

    return (
        <div className="py-20 bg-gray-50" id="about">
            <div className="max-w-4xl mx-auto px-4">
                <a href='#about'>
                    <h2 className="text-4xl font-bold text-center mb-8">{t('about.title')}</h2>
                </a>
                <div className="prose max-w-none text-gray-700">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {t('about.description')}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
