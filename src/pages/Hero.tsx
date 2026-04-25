import { MapPin, Code2, Share2, Github, Linkedin, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { person } from '../data/person';

const technologies = ['TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL'];

export function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section className="pt-24 pb-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Main card */}
          <div className="md:col-span-3 lg:col-span-2 rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-sm hover:shadow-md transition-shadow border border-neutral-200/50 dark:border-neutral-700/50">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-neutral-900 dark:text-white">
              {t('hero.line1')}<br />
              {t('hero.line2')}<br />
              {t('hero.line3')}
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
              Guilherme Carvalho · {t('hero.role')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-blue-600 text-white px-8 py-3 font-medium hover:bg-blue-700 transition-colors"
              >
                {t('hero.cta1')}
              </a>
              <a
                href="#contact"
                className="rounded-full border border-neutral-300 dark:border-neutral-600 px-8 py-3 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {t('hero.cta2')}
              </a>
            </div>
          </div>

          {/* Location card */}
          <div className="rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-sm hover:shadow-md transition-shadow border border-neutral-200/50 dark:border-neutral-700/50">
            <MapPin className="text-blue-600 mb-4" size={24} />
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {t('hero.location')}
            </h3>
            <p className="mt-2 text-2xl font-bold text-neutral-800 dark:text-neutral-100">
              {person.location.city}, {person.location.state}
            </p>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {person.location.country[i18n.language as keyof typeof person.location.country]}
            </p>
          </div>

          {/* Tech stack card */}
          <div className="rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-sm hover:shadow-md transition-shadow border border-neutral-200/50 dark:border-neutral-700/50">
            <Code2 className="text-blue-600 mb-4" size={24} />
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {t('hero.stack')}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-100 dark:bg-blue-800/60 text-blue-700 dark:text-blue-200 px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Social card */}
          <div className="md:col-span-2 rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-sm hover:shadow-md transition-shadow border border-neutral-200/50 dark:border-neutral-700/50">
            <Share2 className="text-blue-600 mb-4" size={24} />
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {t('hero.connect')}
            </h3>
            <div className="mt-4 flex gap-4">
              <a
                href={person.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-neutral-700 dark:text-neutral-300" />
              </a>
              <a
                href={person.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-neutral-700 dark:text-neutral-300" />
              </a>
              <a
                href={`mailto:${person.contact.email}`}
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-neutral-700 dark:text-neutral-300" />
              </a>
              <a
                href={`https://wa.me/${person.whatsapp}?text=${encodeURIComponent(t('contact.whatsappMessage'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} className="text-neutral-700 dark:text-neutral-300" />
              </a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
              <ArrowRight size={16} />
              <span>{t('hero.available')}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
