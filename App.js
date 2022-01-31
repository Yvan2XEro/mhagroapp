import {NavigationContainer} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './styles';
import AuthenticationProvider from './src/contexts/AuthenticationProvider';
import DrawerNavigation from './src/navigations/DrawerNavigation';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <Fragment>
      <StatusBar backgroundColor={theme.colors.primary} />
      <PaperProvider theme={theme}>
        <AuthenticationProvider>
          <NavigationContainer>
            <DrawerNavigation />
          </NavigationContainer>
        </AuthenticationProvider>
      </PaperProvider>
    </Fragment>
  );
}
