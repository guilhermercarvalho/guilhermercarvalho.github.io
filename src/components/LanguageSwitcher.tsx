import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'pt-BR' : 'en';
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="relative">
      {/* Botão principal */}
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
        aria-label="Toggle language"
      >
        <Languages size={20} />
        <span className="text-gray-700 text-xs font-medium min-w-[50px] text-center">
          {isEnglish ? 'EN' : 'PT-BR'}
        </span>
      </button>
    </div>
  );
}
