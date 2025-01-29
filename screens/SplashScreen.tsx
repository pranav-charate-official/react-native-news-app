import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {appStyle} from '../AppStyle';
import {assets} from '../assets/assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 3000);
  });

  return (
    <View style={appStyle.screen}>
      <Image source={assets.welcomeImage} style={style.image} />
      <View style={style.description}>
        <Text style={style.description_title}>Welcome to the app</Text>
        <Text style={style.description_content}>
          We have decided to show the news to all users of this app
        </Text>
        <Text style={style.description_footer}>😊🏭🏝💸🚗🎬😉</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: '70%',
    height: '40%',
    marginTop: '30%',
  },
  description: {
    alignSelf: 'center',
    gap: 10,
    width: '80%',
  },
  description_title: {
    fontSize: 24,
    fontWeight: 800,
    textAlign: 'center',
    color: '#1d2600',
  },
  description_content: {
    fontSize: 16,
    textAlign: 'center',
    color: '#545746',
  },
  description_footer: {
    marginTop: 40,
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 10,
  },
});

export default SplashScreen;
