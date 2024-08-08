import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

const LanguageSwitcher = ({ className }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        {currentLanguage === 'it' ? (
          <Flag code="USA" height="20" className="rounded-full" />
        ) : (
          <Flag code="ITA" height="20" className="rounded-full" />
        )}
      </div>
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-14   rounded-lg  text-black">
          {currentLanguage !== 'en' && (
            <li
              className="flex items-center  cursor-pointer "
              onClick={() => toggleLanguage('en')}
            >
              <Flag code="ITA" height="20" className="rounded-full" />
             
            </li>
          )}
          {currentLanguage !== 'it' && (
            <li
              className="flex items-center cursor-pointer "
              onClick={() => toggleLanguage('it')}
            >
              <Flag code="USA"  className="rounded-full " />
              
              
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;