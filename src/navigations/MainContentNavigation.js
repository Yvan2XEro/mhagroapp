import {useDrawerProgress} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import Animated from 'react-native-reanimated';
import {BackHeader} from '../components/layouts/Headers';
import {AuthenticationContext} from '../contexts/AuthenticationProvider';
import AgronomeDetailsScreen from '../screens/AgronomeDetailsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ProductsListScreen from '../screens/ProductsListScreen';
import ProductsPricesScreen from '../screens/ProductsPricesScreen';
import {AuthenticationStack} from './AuthenticationStack';
import TabNavigation from './TabNavigation';

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
          header: ({navigation, route, options}) => (
            <BackHeader
              navigation={navigation}
              route={route}
              title={options.title}
            />
          ),
        }}>
        <MainStack.Screen
          options={{title: 'Home', headerShown: false}}
          name="HomeApp"
          component={TabNavigation}
        />
        <MainStack.Screen
          options={{title: 'Authentication', headerShown: false}}
          name="Authentication"
          component={AuthenticationStack}
        />
        <MainStack.Screen
          name="AgronomeDetailsScreen"
          component={AgronomeDetailsScreen}
          options={{title: 'DETAILS'}}
        />
        <MainStack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="ProductsPricesScreen"
          component={ProductsPricesScreen}
          options={{
            header: ({navigation, route}) => (
              <BackHeader
                navigation={navigation}
                route={route}
                title="PRODUCTS PRICES"
                withOptions={true}
              />
            ),
          }}
        />
        <MainStack.Screen
          name="ProductsListScreen"
          component={ProductsListScreen}
          options={{
            header: ({navigation, route}) => (
              <BackHeader
                navigation={navigation}
                route={route}
                title="PRODUCTS"
                withOptions={true}
              />
            ),
          }}
        />
        <MainStack.Screen
          name="ChatRoomScreen"
          options={{headerShown: false}}
          component={ChatRoomScreen}
        />
      </MainStack.Navigator>
    </Animated.View>
  );
}
