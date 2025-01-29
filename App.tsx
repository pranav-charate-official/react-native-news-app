/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {StrictMode, useState} from 'react';
import {useKeepAwake} from '@sayem314/react-native-keep-awake';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeTabNavigator from './navigators/HomeTabNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthContext} from './contexts/AuthContext';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  useKeepAwake();

  const [user, setUser] = useState<User>();
  return (
    <StrictMode>
      <SafeAreaProvider>
        <SafeAreaView style={{flexGrow: 1}}>
          <GestureHandlerRootView>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  statusBarStyle: 'dark',
                  statusBarBackgroundColor: '#fbfff4',
                  headerShown: false,
                }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen
                  name="HomeTabNavigator"
                  component={HomeTabNavigator}
                  // options={{headerShown: true}}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaView>
      </SafeAreaProvider>
    </StrictMode>
  );
}

export default App;
