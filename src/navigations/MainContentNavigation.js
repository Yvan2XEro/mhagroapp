import {useDrawerProgress} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import Animated from 'react-native-reanimated';
import {AuthenticationContext} from '../contexts/AuthenticationProvider';
import AuthenticationStack from './AuthenticationStack';
import TabNavigation from './TabNavigation';

const ManStack = createNativeStackNavigator();

export default function MainContentNavigation(props) {
  const {user} = useContext(AuthenticationContext);
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const screenStyle = {
    transform: [{scale}],
    borderRadius,
  };
  return (
    <Animated.View style={[{flex: 1, overflow: 'hidden'}, screenStyle]}>
      <ManStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <ManStack.Screen
          options={{title: 'Home'}}
          name="HomeApp"
          component={TabNavigation}
        />
        <ManStack.Screen
          options={{title: 'Authentication'}}
          name="Authentication"
          component={AuthenticationStack}
        />
        {/* <ManStack.Screen name="App" component={AppplicationStack} {...props} /> */}
        {/* <ManStack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          options={{
            headerShown: true,
            header: ({navigation, route}) => (
              <AppHeader
                navigation={navigation}
                route={route}
                title="Payment"
              />
            ),
          }}
        /> */}
      </ManStack.Navigator>
    </Animated.View>
  );
}
