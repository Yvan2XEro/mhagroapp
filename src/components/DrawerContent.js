import {DrawerItem} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
      colors={[theme.colors.primary, theme.colors.primary]}
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
            <Title style={{color: '#fff'}}>
              {user.displayName !== null ? user.displayName : user.email}
            </Title>
            <Caption style={{color: '#fff'}}>Agronome super qualifie</Caption>
          </View>
        ) : (
          <View
            style={{
              marginLeft: 15,
              flexDirection: 'column',
              color: theme.colors.primary,
            }}>
            <Title style={{color: '#fff'}}>Anonymous</Title>
          </View>
        )}
      </View>
      <Drawer.Section style={styles.menuWrapper} {...props}>
        <TouchableOpacity style={styles.drawerItem}>
          <DrawerItem
            labelStyle={styles.labelStyle}
            icon={({size}) => (
              <Ionicons size={size} color="#FFF" name="home-outline" />
            )}
            label="Home"
            onPress={() => props.navigation.navigate('HomeApp')}
          />
        </TouchableOpacity>
        {user && (
          <>
            <TouchableOpacity style={styles.drawerItem}>
              <DrawerItem
                labelStyle={styles.labelStyle}
                icon={({size}) => (
                  <AntDesign size={size} color="#FFF" name="user" />
                )}
                label="My profile"
                onPress={() =>
                  props.navigation.navigate('App', {screen: 'Profile'})
                }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem}>
              <DrawerItem
                labelStyle={styles.labelStyle}
                icon={({size}) => (
                  <AntDesign size={size} color="#FFF" name="barschart" />
                )}
                label="Product prices"
                onPress={() =>
                  props.navigation.navigate('ProductsPricesScreen')
                }
              />
            </TouchableOpacity>
          </>
        )}
        {!user && (
          <TouchableOpacity style={styles.drawerItem}>
            <DrawerItem
              labelStyle={styles.labelStyle}
              icon={({size}) => (
                <Entypo size={size} color="#FFF" name="login" />
              )}
              label="Login && Register"
              onPress={() => props.navigation.navigate('Authentication')}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.drawerItem}>
          <DrawerItem
            labelStyle={styles.labelStyle}
            icon={({size}) => <Entypo size={size} color="#FFF" name="help" />}
            label="Help"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem}>
          <DrawerItem
            labelStyle={styles.labelStyle}
            icon={({size}) => (
              <FontAwesome size={size} color="#FFF" name="exclamation-circle" />
            )}
            label="About"
          />
        </TouchableOpacity>
        {user && (
          <TouchableOpacity style={styles.drawerItem}>
            <DrawerItem
              labelStyle={styles.labelStyle}
              icon={({size}) => (
                <MaterialCommunityIcons
                  size={size}
                  color="#FFF"
                  name="logout-variant"
                />
              )}
              label="Logout"
              onPress={() => {
                logout();
                props.navigation.navigate('HomeScreen');
              }}
            />
          </TouchableOpacity>
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
  drawerItem: {
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 3,
  },
  labelStyle: {
    margin: 0,
    color: '#fff',
  },
});
