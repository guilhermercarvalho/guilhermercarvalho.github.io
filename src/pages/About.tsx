import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
          {t('about.title')}
        </h2>
        <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {t('about.text')}
        </p>
      </div>
    </section>
  );
}
