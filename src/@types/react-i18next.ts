import 'react-i18next';
import type en from '../translation/en/translation.json';

type TranslationSources = typeof en;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: TranslationSources;
    };
  }
}
