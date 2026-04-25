import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin, MapPin, MessageCircle } from 'lucide-react';
import { person } from '../data/person';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

export function Contact() {
  const { t, i18n } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          ...Object.fromEntries(formData),
        }),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      setStatus('error');
      setErrorMessage(t('contact.form.error'));
    }
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">
          {t('contact.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">
              {t('contact.talk')}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              {t('contact.invite')}
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${person.contact.email}`}
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
                <span>{person.contact.email}</span>
              </a>
              <a
                href={person.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href={person.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`https://wa.me/${person.whatsapp}?text=${encodeURIComponent(t('contact.whatsappMessage'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                <MapPin size={20} />
                <span>
                  {person.location.city}, {person.location.state},{' '}
                  {person.location.country[i18n.language as keyof typeof person.location.country]}
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {status === 'success' ? (
              <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 p-6 text-center">
                <p className="text-green-700 dark:text-green-300 font-medium">
                  {t('contact.form.success')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    {t('contact.form.name')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1"
                  >
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? t('contact.form.sending') : t('contact.form.send')}
                </button>

                {status === 'error' && (
                  <p className="text-sm text-red-600 dark:text-red-400 text-center">
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
