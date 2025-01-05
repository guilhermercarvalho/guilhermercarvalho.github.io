import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { person } from '../data/person';

export function Contact() {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setSuccess('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setError('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="py-20 bg-white" id="contact">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">{t('contact.title')}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">{t('contact.info')}</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Mail className="text-blue-500 mr-4" />
                                <span>{person.contact.email}</span>
                            </div>
                            {/* <div className="flex items-center">
                <Phone className="text-blue-500 mr-4" />
                <span>+1 234 567 890</span>
              </div> */}
                            <div className="flex items-center">
                                <MapPin className="text-blue-500 mr-4" />
                                <span>{`${person.location.city}, ${person.location.country[i18n.language as keyof typeof person.location.country]}`}</span>
                            </div>
                        </div>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('contact.form.name')}
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder={t('contact.form.name')}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('contact.form.email')}
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder={t('contact.form.email')}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {t('contact.form.message')}
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder={t('contact.form.message')}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                        </button>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                        {success && <p className="text-green-500 mt-2">{success}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}
