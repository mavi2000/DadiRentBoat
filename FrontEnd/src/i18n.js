import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import translationEN from './locales/en/translation.json';
// import translationIT from './locales/it/translation.json';
import translationIT from "./locales/en/Translation.json"
import translationEN from  "./locales/it/Translation.json"


const resources = {
  en: {
    translation: translationEN
  },
  it: {
    translation: translationIT
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
