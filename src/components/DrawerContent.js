import {DrawerItem} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthenticationContext} from '../contexts/AuthenticationProvider';
import {theme} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
const DrawerContent = props => {
  const {logout, user} = useContext(AuthenticationContext);
  return (
    <LinearGradient
      colors={['#fff', theme.colors.primary]}
      start={{x: 1, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <View style={[styles.header, {marginTop: 2}]}>
        <Avatar.Image
          size={60}
          source={{
            uri:
              user && user.photoURL
                ? user.photoURL
                : 'https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__480.png',
          }}
        />
        {user != null ? (
          <View>
            <Title style={{color: theme.colors.primary}}>
              {user.displayName !== null ? user.displayName : user.email}
            </Title>
            <Caption style={{color: theme.colors.primary}}>
              Agronome super qualifie
            </Caption>
          </View>
        ) : (
          <View
            style={{
              marginLeft: 15,
              flexDirection: 'column',
              color: theme.colors.primary,
            }}>
            <Title style={{color: theme.colors.primary}}>Anonymous</Title>
          </View>
        )}
      </View>
      <Drawer.Section style={styles.menuWrapper} {...props}>
        <DrawerItem
          labelStyle={{color: theme.colors.primary}}
          icon={({size}) => (
            <Ionicons
              size={size}
              color={theme.colors.primary}
              name="home-outline"
            />
          )}
          label="Home"
          onPress={() => props.navigation.navigate('HomeApp')}
        />
        {user && (
          <>
            <DrawerItem
              labelStyle={{color: theme.colors.primary}}
              icon={({size}) => (
                <AntDesign
                  size={size}
                  color={theme.colors.primary}
                  name="user"
                />
              )}
              label="My profile"
              onPress={() =>
                props.navigation.navigate('App', {screen: 'Profile'})
              }
            />
            <DrawerItem
              labelStyle={{color: theme.colors.primary}}
              icon={({size}) => (
                <AntDesign
                  size={size}
                  color={theme.colors.primary}
                  name="barschart"
                />
              )}
              label="Product prices"
              onPress={() =>
                props.navigation.navigate('App', {
                  screen: 'ProductsPricesScreen',
                })
              }
            />
          </>
        )}
        {!user && (
          <DrawerItem
            labelStyle={{color: theme.colors.primary}}
            icon={({size}) => (
              <Entypo size={size} color={theme.colors.primary} name="login" />
            )}
            label="Login && Register"
            onPress={() => props.navigation.navigate('Authentication')}
          />
        )}
        <DrawerItem
          labelStyle={{color: theme.colors.primary}}
          icon={({size}) => (
            <Entypo size={size} color={theme.colors.primary} name="help" />
          )}
          label="Help"
        />
        <DrawerItem
          labelStyle={{color: theme.colors.primary}}
          icon={({size}) => (
            <FontAwesome
              size={size}
              color={theme.colors.primary}
              name="exclamation-circle"
            />
          )}
          label="About"
        />
        {user && (
          <DrawerItem
            labelStyle={{color: theme.colors.primary}}
            icon={({size}) => (
              <MaterialCommunityIcons
                size={size}
                color={theme.colors.primary}
                name="logout-variant"
              />
            )}
            label="Logout"
            onPress={() => logout()}
          />
        )}
      </Drawer.Section>
      <View style={styles.footer}></View>
    </LinearGradient>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {flex: 1, borderColor: theme.colors.primary},
  header: {
    flex: 0.3,
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  menuWrapper: {
    flex: 0.6,
  },
  footer: {
    flex: 0.3,
  },
});
