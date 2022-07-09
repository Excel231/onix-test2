import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en';
import ru from './ru';
import ukr from './ukr';

const resources = {
  en,
  ru,
  ukr
};

const detection = {
  caches: ['localStorage', 'cookie'],
  order: ['localStorage', 'cookie']
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    detection
  });

export default i18next;
