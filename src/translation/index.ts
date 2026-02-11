import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import gj from './gj/translation.json';
import hn from './hn/translation.json';

import AsyncStorage from '@react-native-async-storage/async-storage';

const resources = {
  en: { translation: en },
  gj: { translation: gj },
  hn: { translation: hn },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

AsyncStorage.getItem('settings-storage').then(data => {
  if (data) {
    const { state } = JSON.parse(data);
    if (state.language) {
      i18n.changeLanguage(state.language);
    }
  }
});

export default i18n;
