import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {BackHeader} from '../components/layouts/Headers';
import AgronomeDetailsScreen from '../screens/AgronomeDetailsScreen';

const Stack = createNativeStackNavigator();
const UserDetailsStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({navigation, route, options}) => (
          <BackHeader
            navigation={navigation}
            route={route}
            title={options.title}
          />
        ),
      }}>
      <Stack.Screen
        name="AgronomeDetailsScreen"
        component={AgronomeDetailsScreen}
        options={{title: 'DETAILS'}}
      />
    </Stack.Navigator>
  );
};

export default UserDetailsStackNavigation;
