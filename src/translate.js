import en from './locales/en';
import ee from './locales/ee';
import ru from './locales/ru';

const translations = {
    en,
    ee,
    ru,
};

export const useTranslation = (language) => {
    return translations[language];
};