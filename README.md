# React Native Multi-Language
Multi-language support libraries and usage in React native mobile applications &amp; with TS

## How it works
1. If user has saved language, use it
2. If user has not saved language, use device language
3. If device language is not supported, use default language



## Installation
First, make sure you have Expo CLI installed:
```
npm install -g expo-cli
```
Clone:
```
git clone https://github.com/Hknzbyn/RN-Multi-Language.git
```
Navigate to the project directory:
```
cd MultiLanguageSample
```
Install: 
```
npm install || yarn install
```
Run Project Locally:
```
expo start || npx expo start || yarn start
```
## NOTES
1. If you do not want to use the saved language
1a. Extract parts containing AsyncStorage from changeLanguage function in app.tsx.
1b. Rearrange the detect partition from useLanguageStorage
2. If the registered language and device language are not available, change the DEFAULT_LOCALE value.
3. If you don't want to use device language, remove step 2 and edit fallbackLng: DEFAULT_LOCALE.
4. If you don't use expo-localization when finding defaultLanguage, use alternative step 2.


<!-- CONTACT -->
## Contact

Hakan Özbeyen - [@Linkedin](https://www.linkedin.com/in/hakanozbeyen) 

Project Link: [https://github.com/Hknzbyn/NewsApp](https://github.com/Hknzbyn/RN-Multi-Language)

<p align="right">(<a href="#top">back to top</a>)</p>
