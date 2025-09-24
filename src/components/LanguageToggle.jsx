import React from 'react';
import { useApp } from '../contexts/AppContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useApp();

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <div className="language-toggle-content">
        <span className="language-flag">
          {language === 'pt' ? '🇺🇸' : '🇧🇷'}
        </span>
        <span className="language-text">
          {language === 'pt' ? 'EN' : 'PT'}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;