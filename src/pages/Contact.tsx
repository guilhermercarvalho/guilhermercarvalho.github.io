import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { person } from '../data/person';
import { useForm, ValidationError } from '@formspree/react'

const formKey = import.meta.env.VITE_FORMSPREE_KEY;

export function Contact() {
    const { t, i18n } = useTranslation();
    const [state, handleSubmit] = useForm(formKey);

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
                            <div className="flex items-center">
                                <MapPin className="text-blue-500 mr-4" />
                                <span>{`${person.location.city}, ${person.location.country[i18n.language as keyof typeof person.location.country]}`}</span>
                            </div>
                        </div>
                    </div>
                    {!state.succeeded && (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    htmlFor='email'
                                >
                                    {t('contact.form.email')}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    placeholder={t('contact.form.email')}
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                    htmlFor='message'
                                >
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    placeholder={t('contact.form.message')}
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={state.submitting || state.succeeded}
                                className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
                            >
                                {state.submitting ? t('contact.form.sending') : t('contact.form.send')}
                            </button>
                            {state.errors && <p className="text-center text-red-500 mt-2">{t('contact.form.error')}</p>}
                        </form>
                    )}
                    {state.succeeded && <p className="text-center text-green-500 mt-2">{t('contact.form.sended')}</p>}
                </div>
            </div>
        </div>
    );
}
