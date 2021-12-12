import {useDrawerProgress} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import Animated from 'react-native-reanimated';
import {AuthenticationContext} from '../contexts/AuthenticationProvider';
import {AuthenticationStack} from './AuthenticationStack';
import TabNavigation from './TabNavigation';
import UserDetailsStackNavigation from './UserDetailsStackNavigation';

const MainStack = createNativeStackNavigator();

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
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen
          options={{title: 'Home'}}
          name="HomeApp"
          component={TabNavigation}
        />
        <MainStack.Screen
          options={{title: 'Authentication'}}
          name="Authentication"
          component={AuthenticationStack}
        />
        <MainStack.Screen
          name="UserDetailsStack"
          component={UserDetailsStackNavigation}
        />
      </MainStack.Navigator>
    </Animated.View>
  );
}
