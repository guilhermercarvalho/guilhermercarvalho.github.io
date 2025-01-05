import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { person } from '../data/person';
import { TypeAnimation } from 'react-type-animation';

const TEXT_BLUE_400_CLASS_NAME = 'text-blue-400';

export function Home() {
    const { t, i18n } = useTranslation();
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [i18n.language]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    {/* {t('home.greeting')} <span className="text-blue-400">{person.name}</span> */}
                    <TypeAnimation
                        key={key}
                        cursor={false}
                        sequence={[
                            (el) => el?.classList.remove(TEXT_BLUE_400_CLASS_NAME),
                            t('home.greeting'),
                            1000,
                            '',
                            (el) => el?.classList.add(TEXT_BLUE_400_CLASS_NAME),
                            200,
                            person.name,
                            5000,
                        ]}
                        speed={50} // Velocidade de digitação (50ms por caractere)
                        repeat={0} // Repete indefinidamente
                        className={TEXT_BLUE_400_CLASS_NAME}
                    />
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    <TypeAnimation
                        key={key}
                        cursor={false}
                        sequence={[
                            '',
                            1800,
                            t('home.role'),
                            4000,
                        ]}
                        speed={25} // Velocidade de digitação (50ms por caractere)
                        repeat={0} // Repete indefinidamente
                    />
                </p>
                <div className="flex justify-center space-x-6 mb-12">
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
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                    <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors text-center">
                        {t('home.contact')}
                    </a>
                    <a href='#projects' className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                        {t('home.cta')}
                    </a>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                        {t('home.resume')}
                    </button>
                </div>
            </div>
        </div>
    );
}
