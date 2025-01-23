import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { person } from '../data/person';
import { Link } from 'react-router-dom';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#" className="text-2xl font-bold text-blue-500">
                        {person.name}
                    </a>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-gray-700 hover:text-blue-500">{t('navigation.about')}</a>
                        <a href="#roles" className="text-gray-700 hover:text-blue-500">{t('navigation.roles')}</a>
                        <a href="#projects" className="text-gray-700 hover:text-blue-500">{t('navigation.projects')}</a>
                        <a href="#skills" className="text-gray-700 hover:text-blue-500">{t('navigation.skills')}</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-500">{t('navigation.contact')}</a>
                        <Link to="/blog" className="text-gray-700 hover:text-blue-500">
                            {t('navigation.blog')}
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center">
                        <LanguageSwitcher />
                    </div>
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                        <a
                            href="#about"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('navigation.about')}
                        </a>
                        <a
                            href="#projects"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('navigation.projects')}
                        </a>
                        <a
                            href="#skills"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('navigation.skills')}
                        </a>
                        <a
                            href="#contact"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('navigation.contact')}
                        </a>
                        <a
                            href="#blog"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-500"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('navigation.blog')}
                        </a>
                        <div className="px-3 py-2">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
