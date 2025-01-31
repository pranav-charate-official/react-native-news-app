import React, {useContext, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {appStyle} from '../AppStyle';
import FormInputField from '../components/FormInputField';
import FormButton from '../components/FormButton';
import DividerWithText from '../components/DividerWithText';
import {assets} from '../assets/assets';
import {authContext} from '../contexts/authContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user} = useContext(authContext);

  function validateLogin(currentUser: User | null) {
    if (currentUser == null) {
      return ToastAndroid.show('Register yourself first', ToastAndroid.SHORT);
    }

    if (email === '') {
      return ToastAndroid.show('Email is required', ToastAndroid.SHORT);
    } else if (password === '') {
      return ToastAndroid.show('Password is required', ToastAndroid.SHORT);
    }

    const correctEmail = currentUser.email;
    const correctPassword = currentUser.password;

    if (email !== correctEmail || password !== correctPassword) {
      return ToastAndroid.show(
        'Incorrect email or password',
        ToastAndroid.SHORT,
      );
    }

    setEmail('');
    setPassword('');

    navigation.navigate('HomeTabNavigator');
    return ToastAndroid.show('Login awesome', ToastAndroid.SHORT);
  }

  return (
    <View style={appStyle.screen}>
      <View>
        <Text style={appStyle.pageTitle}>Login</Text>
        <Text style={appStyle.pageSubTitle}>Welcome back to the app</Text>
      </View>

      <ScrollView
        contentContainerStyle={style.loginForm}
        keyboardShouldPersistTaps={'handled'}>
        <FormInputField
          label="Email Address"
          placeHolder="hello@example.com"
          value={email}
          type="email-address"
          textContentType="emailAddress"
          onChange={setEmail}
        />
        <FormInputField
          label="Password"
          placeHolder="********"
          value={password}
          isPassword={true}
          textContentType="password"
          onChange={setPassword}
        />

        <FormButton
          backgroundColor="#3b5100"
          onPress={() => {
            validateLogin(user);
          }}>
          <Text style={appStyle.buttonText}>Login</Text>
        </FormButton>

        <DividerWithText text="OR" />

        <FormButton backgroundColor="#e3e5de">
          <Image source={assets.google} style={appStyle.buttonIcon} />
          <Text style={[appStyle.buttonText, {color: '#61635d'}]}>
            Continue with Google
          </Text>
        </FormButton>

        <Text
          style={style.goToRegister}
          onPress={() => navigation.replace('Register')}>
          Create an account
        </Text>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  loginForm: {
    flexGrow: 1,
    marginHorizontal: 20,
    marginTop: 40,
    gap: 20,
  },
  goToRegister: {
    marginTop: 'auto',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600,
    color: '#678c00',
  },
});

export default LoginScreen;
