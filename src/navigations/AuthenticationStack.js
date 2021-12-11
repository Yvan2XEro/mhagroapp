import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import LoginScreen from '../screens/Auth/LoginScreen';
import StartAuthScreen from '../screens/Auth/StartAuthScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import {AuthenticationContext} from '../contexts/AuthenticationProvider';
import {AppHeader} from '../components/layouts/Headers';

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

export const AuthenticationStack = () => {
  const [initializing, setInitializing] = useState(true);
  const {setUser, user} = useContext(AuthenticationContext);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    GoogleSignin.configure({
      webClientId:
        '932172823286-2ctrg8snc8h9o1fuom7bt45jdve6tb6e.apps.googleusercontent.com',
    });
    return () => subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  if (!user)
    return (
      <AuthStack.Navigator
        initialRouteName="Authentication"
        screenOptions={{
          header: ({navigation, route, options}) => (
            <AppHeader
              navigation={navigation}
              route={route}
              title={options.title}
            />
          ),
        }}>
        {/* <AuthStack.Screen
          name="AuthenticationHome"
          options={{title: 'Authentication'}}
          component={StartAuthScreen}
        />
        <AuthStack.Screen
          options={{title: 'Login'}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{title: 'Register'}}
          name="RegisterScreen"
          component={RegisterScreen}
        /> */}
      </AuthStack.Navigator>
    );
};

export const AppplicationStack = () => (
  <AppStack.Navigator
    screenOptions={{
      header: ({navigation, route, options}) => (
        <AppHeader
          navigation={navigation}
          route={route}
          title={options.headerTitle}
        />
      ),
    }}></AppStack.Navigator>
);
