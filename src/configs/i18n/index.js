import I18n from 'i18n-js';
import vi from './vi.json';
import en from './en.json';

I18n.languages = {
    vi: 'vi',
    en: 'en',
};

I18n.defaultLocale = I18n.languages.vi;
I18n.locale = I18n.defaultLocale;
I18n.translations = {
    vi,
    en,
};

export default I18n;
