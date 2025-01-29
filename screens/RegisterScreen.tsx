import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {appStyle} from '../AppStyle';
import FormInputField from '../components/FormInputField';
import FormButton from '../components/FormButton';
import DividerWithText from '../components/DividerWithText';
import {assets} from '../assets/assets';

const RegisterScreen = ({navigation}) => {
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
          placeHolder="hello@example.com"
          type="email-address"
          textContentType="emailAddress"
        />
        <FormInputField
          label="Full Name"
          placeHolder="Akshay Kumar"
          type="default"
          textContentType="name"
        />
        <FormInputField
          label="Password"
          placeHolder="********"
          isPassword={true}
          textContentType="password"
        />
        <FormInputField
          label="Confirm Password"
          placeHolder="********"
          isPassword={true}
          textContentType="password"
        />
        <View />
        <View />
        <FormButton backgroundColor="#3b5100">
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
