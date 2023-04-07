import {
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  Platform,
  NativeModules,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaView style={{ flex: 1 }}>
        <Main />
      </SafeAreaView>
    </I18nextProvider>
  );
}

const Main = () => {
  const { t, i18n } = useTranslation('global');
  const usableLanguages = ['en', 'es', 'tr'];

  //Change language & save AsyncStorage function - show Alert
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    AsyncStorage.setItem('language', lng);

    Alert.alert(
      t(`languages.${lng}`),
      t('changeLang.message'),
      [{ text: 'OK', onPress: () => console.log('OK') }],
      { cancelable: false }
    );
  };

  const chosenLanguage = i18n.language;

  const Buttons = () => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 50 }}>
        {usableLanguages.map((lng) => {
          return (
            <Pressable
              key={lng}
              style={{
                backgroundColor: '#123456',
                padding: 8,
                borderRadius: 5,
                marginHorizontal: 15,
              }}
              onPress={() => changeLanguage(lng)}>
              <Text style={{ color: '#fff', fontSize: 18 }}>
                {t(`languages.${lng}`)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
      <Text style={styles.text}>
        {t('home.currentLang')}{' '}
        <Text style={{ textDecorationLine: 'underline' }}>
          {t(`languages.${chosenLanguage}`)}
        </Text>
      </Text>
      <Text style={styles.text}>{t('home.message')}</Text>

      <Buttons />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
