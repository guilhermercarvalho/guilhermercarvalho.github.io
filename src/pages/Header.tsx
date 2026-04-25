import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt-BR' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { href: '#work', label: t('navigation.work') },
    { href: '#about', label: t('navigation.about') },
    { href: '#contact', label: t('navigation.contact') },
    { href: 'https://guilhermercarvalho.github.io/blog/', label: 'Blog', external: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/50 dark:border-neutral-700/50 backdrop-blur-md bg-white/70 dark:bg-neutral-900/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Guilherme Carvalho
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            )
          )}

          <div className="flex items-center gap-2 ml-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="text-sm font-semibold px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {i18n.language === 'en' ? 'PT' : 'EN'}
            </button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200/50 dark:border-neutral-700/50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <div className="flex items-center gap-4 pt-2 border-t border-neutral-200/50 dark:border-neutral-700/50">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button
                onClick={toggleLanguage}
                className="text-sm font-semibold px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {i18n.language === 'en' ? 'PT' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
