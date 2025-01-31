import React from 'react';
import {
  PermissionsAndroid,
  Platform,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {appStyle} from '../AppStyle';
import FormButton from '../components/FormButton';
import {
  isLocationEnabled,
  promptForEnableLocationIfNeeded,
} from 'react-native-android-location-enabler';

const LocationDemoScreen = () => {
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Demo App',
          message:
            'Location Demo App trying out location, please grant the permission',
          buttonPositive: 'Ok',
          buttonNegative: 'No',
          buttonNeutral: 'Ask me later',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        ToastAndroid.show('Permission Granted', ToastAndroid.SHORT);
      } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
        ToastAndroid.show('Permission denied', ToastAndroid.SHORT);
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        ToastAndroid.show('Permission never_ask_again', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Permission result unknown', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('Permission error', ToastAndroid.SHORT);
      console.error('Location Permission error: ', error);
    }
  };

  const checkGpsEnabled = async () => {
    if (Platform.OS === 'android') {
      try {
        const checkEnabled: boolean = await isLocationEnabled();
        ToastAndroid.show(
          checkEnabled ? 'GPS is on' : 'GPS is off',
          ToastAndroid.SHORT,
        );
      } catch (error) {
        console.error('Check gps service error: ', error);
      }
    }
  };

  const enableGps = async () => {
    if (Platform.OS === 'android') {
      try {
        const enableResult = await promptForEnableLocationIfNeeded();
        console.log('GPSEnableResult: ', enableResult);
        ToastAndroid.show('GPS is ' + enableResult, ToastAndroid.SHORT);
        // The user has accepted to enable the location services
        // data can be :
        //  - "already-enabled" if the location services has been already enabled
        //  - "enabled" if user has clicked on OK button in the popup
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
          if (error.message === 'ERR00') {
            ToastAndroid.show('GPS request cancelled', ToastAndroid.SHORT);
          }
          // The user has not accepted to enable the location services or something went wrong during the process
          // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
          // codes :
          //  - ERR00 : The user has clicked on Cancel button in the popup
          //  - ERR01 : If the Settings change are unavailable
          //  - ERR02 : If the popup has failed to open
          //  - ERR03 : Internal error
        }
      }
    }
  };

  return (
    <View style={appStyle.screen}>
      <View>
        <Text style={appStyle.pageTitle}>Location</Text>
        <Text style={appStyle.pageSubTitle}>
          Try location service turn on dialog
        </Text>
      </View>

      <View style={appStyle.newsContainer}>
        <FormButton
          backgroundColor="#3b5100"
          onPress={requestLocationPermission}>
          <Text style={appStyle.buttonText}>Request Location Permission</Text>
        </FormButton>

        <FormButton backgroundColor="#0047ab" onPress={checkGpsEnabled}>
          <Text style={appStyle.buttonText}>Check GPS enabled</Text>
        </FormButton>

        <FormButton backgroundColor="#a800ab" onPress={enableGps}>
          <Text style={appStyle.buttonText}>Request to turn on GPS</Text>
        </FormButton>
      </View>
    </View>
  );
};

export default LocationDemoScreen;
