import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  useEffect(() => {
    return () => {
      checkLanguage();
    };
  }, []);

  //Check if language is saved in async storage
  const checkLanguage = async () => {
    try {
      const value = await AsyncStorage.getItem('language');
      if (value !== null) {
        // value previously stored
        console.log(value);
      } else {
        console.log('No language saved');
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  //TODO: Add splash screen image
  return (
    <View style={{ flex: 1 }}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
