import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {appStyle} from '../AppStyle';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={appStyle.screen}>
        <View>
          <Text style={appStyle.pageTitle}>Profile</Text>
          <Text style={appStyle.pageSubTitle}>Everything about you</Text>
        </View>

        <View style={style.informationContainer}>
          <UserInformationField label="Full Name" value="abcd" />
          <UserInformationField label="Email" value="abcd" />
          <UserInformationField label="Password" value="*******" />
        </View>
      </View>
    </ScrollView>
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
  },
});

export default ProfileScreen;
