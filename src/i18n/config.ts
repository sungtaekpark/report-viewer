import i18n from 'i18next';
import en from './en/index.json';
import ko from './ko/index.json';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en,
  ko,
} as const;

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    lng: 'ko',
    fallbackLng: 'ko',
    supportedLngs: ['en', 'ko'],
    resources,
  });

export default i18n;
