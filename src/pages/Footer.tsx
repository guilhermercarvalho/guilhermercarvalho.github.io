import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { person } from '../data/person';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={person.social.github} className="hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href={person.social.linkedin} className="hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${person.contact.email}`} className="hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} {person.name}. {t('footer.allRightsReserved')}</p>
        <p className="text-gray-400">{t('footer.builtWithDedication')} 💪🛠️</p>
      </div>
    </footer>
  );
}
