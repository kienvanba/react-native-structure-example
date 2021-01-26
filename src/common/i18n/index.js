import I18n from 'i18n-js';
import vi from './vi.json';

I18n.languages = {
  vi: 'vi',
};

I18n.defaultLocale = I18n.languages.vi;
I18n.locale = I18n.defaultLocale;
I18n.translations = {
  vi,
};

export default I18n;
