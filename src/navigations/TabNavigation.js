import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from '../../styles';
import AgronomesListScreen from '../screens/AgronomesListScreen';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatListScreen from '../screens/ChatListScreen';
import {AppHeader} from '../components/layouts/Headers';

function TabIcon({focused, name, size, type = null}) {
  if (type === null)
    return (
      <View style={focused ? tabStyle.active : {}}>
        <Entypo
          name={name}
          color={focused ? theme.colors.primary : '#fff'}
          size={size}
        />
      </View>
    );
  if (type === 'MaterialCommunityIcons')
    return (
      <View style={focused ? tabStyle.active : {}}>
        <MaterialCommunityIcons
          name={name}
          color={focused ? theme.colors.primary : '#fff'}
          size={size}
        />
      </View>
    );
  if (type === 'MaterialIcons')
    return (
      <View style={focused ? tabStyle.active : {}}>
        <MaterialIcons
          name={name}
          color={focused ? theme.colors.primary : '#fff'}
          size={size}
        />
      </View>
    );
  if (type === 'Ionicons')
    return (
      <View style={focused ? tabStyle.active : {}}>
        <Ionicons
          name={name}
          color={focused ? theme.colors.primary : '#fff'}
          size={size}
        />
      </View>
    );
}

const AppTab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <AppTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          borderTopColor: '#fff',
          overflow: 'hidden',
        },
      }}>
      <AppTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          headerTitle: 'Produits agricoles',
          tabBarIcon: ({focused, size}) => (
            <TabIcon name="home" focused={focused} size={size} />
          ),
          header: ({navigation, route}) => (
            <AppHeader navigation={navigation} route={route} title="Home" />
          ),
        }}
      />
      <AppTab.Screen
        name="AgronomesListScreen"
        component={AgronomesListScreen}
        options={{
          headerTitle: 'Agronomes qualifies',
          tabBarIcon: ({focused, size}) => (
            <TabIcon name="users" focused={focused} size={size} />
          ),
          header: ({navigation, route}) => (
            <AppHeader
              navigation={navigation}
              route={route}
              title="Agronomes"
            />
          ),
        }}
      />
      <AppTab.Screen
        name="ChatListScreen"
        component={ChatListScreen}
        options={{
          headerTitle: 'Chat',
          tabBarIcon: ({focused, size}) => (
            <TabIcon
              type="Ionicons"
              name="chatbox-sharp"
              focused={focused}
              size={size}
            />
          ),
          header: ({navigation, route}) => (
            <AppHeader navigation={navigation} route={route} title="Chats" />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}
const tabStyle = StyleSheet.create({
  active: {
    backgroundColor: '#fff',
    height: '130%',
    justifyContent: 'center',
    marginBottom: 15,
    borderTopColor: '#fff',
    paddingHorizontal: 10,
    borderTopRightRadius: -200,
    borderRadius: 100,
    overflow: 'hidden',
  },
});
