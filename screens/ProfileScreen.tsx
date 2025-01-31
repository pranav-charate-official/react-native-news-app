import React, {useContext} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {appStyle} from '../AppStyle';
import {authContext} from '../contexts/authContext';
import FormButton from '../components/FormButton';

const ProfileScreen = ({navigation}) => {
  const {user, setUser} = useContext(authContext);

  function logOutUser() {
    navigation.replace('Login');
    ToastAndroid.show('Logged out succesfully.', ToastAndroid.SHORT);
  }

  function deleteUser() {
    Alert.alert('Delete Account', 'Do you really want to delete your account', [
      {text: 'No', onPress: () => {}, isPreferred: true},
      {
        text: 'Yes',
        onPress: () => {
          setUser(null);
          navigation.replace('Register');
          ToastAndroid.show('Account deleted succesfully.', ToastAndroid.SHORT);
        },
      },
    ]);
  }

  return (
    <View style={appStyle.screen}>
      <View>
        <Text style={appStyle.pageTitle}>Profile</Text>
        <Text style={appStyle.pageSubTitle}>Everything about you</Text>
      </View>
      <ScrollView contentContainerStyle={style.informationContainer}>
        <UserInformationField
          label="Email"
          value={user?.email ?? 'nullEmail'}
        />
        <UserInformationField
          label="Full Name"
          value={user?.fullName ?? 'nullFullName'}
        />
        <UserInformationField
          label="Password"
          value={user?.password ?? 'nullPassword'}
        />

        <FormButton backgroundColor={'#ed8600'} onPress={logOutUser}>
          <Text style={appStyle.buttonText}>Log out</Text>
        </FormButton>

        <FormButton backgroundColor={'#ff0000'} onPress={deleteUser}>
          <Text style={appStyle.buttonText}>Delete my account</Text>
        </FormButton>
      </ScrollView>
    </View>
  );
};

type Props = {
  label: string;
  value: string;
};
const UserInformationField = (props: Props) => {
  return (
    <View style={style.informationFieldContainer}>
      <Text style={style.informationFieldLabel}>{props.label}</Text>
      <Text style={style.informationFieldValue}>{props.value}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  informationContainer: {
    marginTop: 30,
    paddingHorizontal: 25,
    gap: 20,
  },
  informationFieldContainer: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    gap: 10,
    elevation: 5,
  },
  informationFieldLabel: {
    fontSize: 16,
    color: '#757b67',
  },
  informationFieldValue: {
    fontSize: 20,
    fontFamily: 'monospace',
  },
});

export default ProfileScreen;
