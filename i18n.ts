import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalEN, GlobalTR, GlobalES } from './src/translations/';
import { getLocales } from 'expo-localization';

export const locales = {
  en: GlobalEN,
  es: GlobalES,
  tr: GlobalTR,
};

// -HOW IS WORKING-
// 1. If user has saved language, use it
// 2. If user has not saved language, use device language
// 3. If device language is not supported, use default language

// -NOTES-

// 1. If you do not want to use the saved language
//  1a. Extract parts containing AsyncStorage from changeLanguage function in app.tsx.
//  1b. Rearrange the detect partition from useLanguageStorage
// 2. If the registered language and device language are not available, change the DEFAULT_LOCALE value.
// 3. If you don't want to use device language, remove step 2 and edit fallbackLng: DEFAULT_LOCALE.
// 4. If you don't use expo-localization when finding defaultLanguage, use alternative step 2.

// Alternative Step 2 (import { Platform, NativeModules } from 'react-native';)
//  const deviceLanguage =
//    Platform.OS === 'ios'
//      ? NativeModules.SettingsManager.settings.AppleLocale ||
//        NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
//      : NativeModules.I18nManager.localeIdentifier;

// Step 3
export const DEFAULT_LOCALE = 'tr';

// Step 2
export const defaultLanguage = getLocales()[0].languageCode || DEFAULT_LOCALE;

const useLanguageStorage: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    //Step 1
    AsyncStorage.getItem('language').then((lang) => {
      if (lang) return callback(lang);
    });
  },
  init: () => null,
  cacheUserLanguage: async (language: string) => {
    AsyncStorage.setItem('language', language);
  },
};

i18n
  .use(useLanguageStorage)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    compatibilityJSON: 'v3',

    resources: locales,
    debug: true,

    react: {
      useSuspense: false,
    },
  });

export default i18n;
