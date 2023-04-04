import { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './i18n';
import { LinearGradient } from 'expo-linear-gradient';

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

  useEffect(() => {
    return () => {};
  }, []);

  const chosenLanguage = i18n.language;
  console.log('chosenLanguage---', chosenLanguage);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
      <Text style={styles.text}>{t('home.message')}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    marginTop: 75,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
