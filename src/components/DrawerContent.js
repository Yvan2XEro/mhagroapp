import {DrawerItem} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Caption, Drawer, Title} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
          size={45}
          source={{
            uri:
              user && user.photoURL
                ? user.photoURL
                : 'https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257__480.png',
          }}
        />
        {user != null ? (
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                fontFamily: 'ProductSans-Bold',
              }}>
              {user.displayName !== null ? user.displayName : user.email}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
                fontFamily: 'ProductSans-Regular',
              }}>
              Agronome super qualifie
            </Text>
          </View>
        ) : (
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                fontFamily: 'ProductSans-Bold',
              }}>
              Anonyme
            </Text>
          </View>
        )}
      </View>
      <Drawer.Section style={styles.menuWrapper} {...props}>
        <TouchableOpacity style={styles.drawerItem}>
          <DrawerItem
            labelStyle={styles.labelStyle}
            icon={({size}) => (
              <MaterialIcons size={size} color="#FFF" name="home" />
            )}
            label="Accueil"
            onPress={() => props.navigation.navigate('HomeApp')}
          />
        </TouchableOpacity>
        {user && (
          <>
            <TouchableOpacity style={styles.drawerItem}>
              <DrawerItem
                labelStyle={styles.labelStyle}
                icon={({size}) => (
                  <MaterialIcons size={size} color="#FFF" name="person" />
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
                  <MaterialIcons size={size} color="#FFF" name="analytics" />
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
                <MaterialIcons size={size} color="#FFF" name="login" />
              )}
              label="Authentification"
              onPress={() => props.navigation.navigate('Authentication')}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.drawerItem}>
          <DrawerItem
            labelStyle={styles.labelStyle}
            icon={({size}) => (
              <MaterialIcons size={size} color="#FFF" name="contact-support" />
            )}
            label="Support"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem}>
          <DrawerItem
            labelStyle={styles.labelStyle}
            icon={({size}) => (
              <MaterialIcons size={size} color="#FFF" name="info" />
            )}
            label="A propos"
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
      <View style={styles.footer} />
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
    flexDirection: 'row',
  },
  menuWrapper: {
    flex: 0.6,
  },
  footer: {
    flex: 0.3,
  },
  drawerItem: {
    borderRadius: 5,
    marginTop: 3,
  },
  labelStyle: {
    margin: 0,
    color: '#fff',
  },
});
