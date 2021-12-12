import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsPricesScreen from '../screens/ProductsPricesScreen';
import React from 'react';
import {BackHeader} from '../components/layouts/Headers';

const Stack = createNativeStackNavigator();
const ProductsPricesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
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
    </Stack.Navigator>
  );
};

export default ProductsPricesStack;
