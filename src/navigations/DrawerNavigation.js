import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {theme} from '../../styles';
import DrawerContent from '../components/DrawerContent';
import MainContentNavigation from './MainContentNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        drawerStyle: {width: '75%'},
        overlayColor: 'transparent',
        headerShown: false,
        sceneContainerStyle: {backgroundColor: theme.colors.primary},
        drawerContentContainerStyle: {flex: 1},
      }}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}>
      <Drawer.Screen name="root">
        {props => <MainContentNavigation {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
