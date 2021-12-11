import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './styles';
import AuthenticationProvider from './src/contexts/AuthenticationProvider';
import DrawerNavigation from './src/navigations/DrawerNavigation';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthenticationProvider>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </AuthenticationProvider>
    </PaperProvider>
  );
}
