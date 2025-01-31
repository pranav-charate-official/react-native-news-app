import React, {StrictMode, useState} from 'react';
// import {useKeepAwake} from '@sayem314/react-native-keep-awake';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeTabNavigator from './navigators/HomeTabNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {authContext} from './contexts/authContext';
import LocationDemoScreen from './screens/LocationDemoScreen';
import {Provider} from 'react-redux';
import {store} from './store';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // useKeepAwake();

  const [user, setUser] = useState<User | null>(null);

  return (
    <StrictMode>
      <Provider store={store}>
        <SafeAreaProvider>
          <SafeAreaView style={{flexGrow: 1}}>
            <GestureHandlerRootView>
              <authContext.Provider value={{user: user, setUser: setUser}}>
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
                    <Stack.Screen
                      name="Location"
                      component={LocationDemoScreen}
                    />
                  </Stack.Navigator>
                </NavigationContainer>
              </authContext.Provider>
            </GestureHandlerRootView>
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>
    </StrictMode>
  );
}

export default App;
