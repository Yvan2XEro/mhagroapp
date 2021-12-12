import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../styles';
import AgronomesListScreen from '../screens/AgronomesListScreen';
import HomeScreen from '../screens/HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatListScreen from '../screens/ChatListScreen';
import {AppHeader} from '../components/layouts/Headers';

const windowWidth = Dimensions.get('window').width;

function TabIcon({focused, name, size, type = null}) {
  if (type === null)
    return (
      <View style={focused ? tabStyle.active : {}}>
        <Entypo name={name} color={'#fff'} size={size} />
      </View>
    );
  if (type === 'MaterialCommunityIcons')
    return (
      <View style={focused ? tabStyle.active : {}}>
        <MaterialCommunityIcons name={name} color={'#fff'} size={size} />
      </View>
    );
  if (type === 'MaterialIcons')
    return (
      <View style={focused ? tabStyle.active : {}}>
        <MaterialIcons name={name} color={'#fff'} size={size} />
      </View>
    );
  if (type === 'Ionicons')
    return (
      <View style={focused ? tabStyle.active : {}}>
        <Ionicons name={name} color={'#fff'} size={size} />
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
          width: windowWidth,
        },
      }}>
      <AppTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          headerTitle: 'Produits agricoles',
          tabBarIcon: ({focused, size}) => (
            <TabIcon
              type="MaterialIcons"
              name="home"
              focused={focused}
              size={size * 1.1}
            />
          ),
          headerShown: false,
        }}
      />
      <AppTab.Screen
        name="AgronomesListScreen"
        component={AgronomesListScreen}
        options={{
          headerTitle: 'Agronomes qualifies',
          tabBarIcon: ({focused, size}) => (
            <TabIcon
              type="MaterialIcons"
              name="people"
              focused={focused}
              size={size * 1.1}
            />
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
              type="MaterialIcons"
              name="question-answer"
              focused={focused}
              size={size * 1.1}
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
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#fff',
    height: '100%',
    display: 'flex',
    width: windowWidth / 3,
    borderTopRightRadius: -200,
    borderTopWidth: 4,
    overflow: 'hidden',
  },
});
