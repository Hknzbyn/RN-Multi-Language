import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalEN, GlobalTR, GlobalES } from './src/translations/';
import { getLocales } from 'expo-localization';

import { NativeModules, Platform } from 'react-native';

export const locales = {
  en: GlobalEN,
  es: GlobalES,
  tr: GlobalTR,
};

export const DEFAULT_LOCALE = 'tr'; // DEfault language

export const defaultLanguage = getLocales()[0].languageCode || DEFAULT_LOCALE;

const useLanguageStorage: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    AsyncStorage.getItem('language').then((lang) => {
      if (lang) return callback(lang);
    });
  },
  init: () => null,
  cacheUserLanguage: async (language: string) => {
    console.log('language', language);
    AsyncStorage.setItem('language', language);
  },
};

i18n
  .use(useLanguageStorage)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LOCALE,
    compatibilityJSON: 'v3',

    resources: locales,
    debug: true,

    react: {
      useSuspense: false,
    },
  });

export default i18n;
