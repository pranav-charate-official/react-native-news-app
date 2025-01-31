import React, {useContext, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
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

const RegisterScreen = ({navigation}) => {
  const {setUser} = useContext(authContext);

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function validateRegister() {
    if (email.trim() === '') {
      return ToastAndroid.show('Email is required', ToastAndroid.SHORT);
    } else if (fullName.trim() === '') {
      return ToastAndroid.show('Full name is required', ToastAndroid.SHORT);
    } else if (password.trim() === '') {
      return ToastAndroid.show('Password is required', ToastAndroid.SHORT);
    } else if (confirmPassword.trim() === '') {
      return ToastAndroid.show(
        'Confirm Password is required',
        ToastAndroid.SHORT,
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fullNamePattern = /[A-Za-z]+\s*[A-Za-z]*/;

    if (!emailPattern.test(email.trim())) {
      return ToastAndroid.show('Email is invalid', ToastAndroid.SHORT);
    } else if (!fullNamePattern.test(fullName.trim())) {
      return ToastAndroid.show('Name is invalid', ToastAndroid.SHORT);
    } else if (password.length < 4) {
      return ToastAndroid.show(
        'Password length should be more than 4',
        ToastAndroid.SHORT,
      );
    } else if (confirmPassword !== password) {
      return ToastAndroid.show('Passwords do not match', ToastAndroid.SHORT);
    }

    const newUser: User = {
      email: email,
      fullName: fullName,
      password: password,
    };

    setUser(newUser);
    navigation.navigate('Login');
    ToastAndroid.show('Registration succesful', ToastAndroid.SHORT);

    setEmail('');
    setFullName('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <View style={appStyle.screen}>
      <View>
        <Text style={appStyle.pageTitle}>Create an account</Text>
        <Text style={appStyle.pageSubTitle}>
          Get started by filling in the details
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={style.registerForm}
        keyboardShouldPersistTaps={'handled'}>
        <FormInputField
          label="Email Address"
          value={email}
          placeHolder="hello@example.com"
          type="email-address"
          textContentType="emailAddress"
          onChange={setEmail}
        />
        <FormInputField
          label="Full Name"
          value={fullName}
          placeHolder="Akshay Kumar"
          type="default"
          textContentType="name"
          onChange={setFullName}
        />
        <FormInputField
          label="Password"
          value={password}
          placeHolder="********"
          isPassword={true}
          textContentType="password"
          onChange={setPassword}
        />
        <FormInputField
          label="Confirm Password"
          value={confirmPassword}
          placeHolder="********"
          isPassword={true}
          textContentType="password"
          onChange={setConfirmPassword}
        />
        <View />
        <View />
        <FormButton backgroundColor="#3b5100" onPress={validateRegister}>
          <Text style={appStyle.buttonText}>Sign up</Text>
        </FormButton>

        <DividerWithText text="OR" />

        <FormButton backgroundColor="#e3e5de">
          <Image source={assets.google} style={appStyle.buttonIcon} />
          <Text style={[appStyle.buttonText, {color: '#61635d'}]}>
            Continue with Google
          </Text>
        </FormButton>

        <Text
          style={style.goToLogin}
          onPress={() => navigation.replace('Login')}>
          Already have an account?{' '}
          <Text style={{fontWeight: 600}}>Login here</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  registerForm: {
    flexGrow: 1,
    marginHorizontal: 20,
    marginTop: 20,
    gap: 10,
  },
  goToLogin: {
    marginTop: 'auto',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#678c00',
  },
});

export default RegisterScreen;
