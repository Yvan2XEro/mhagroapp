import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GStyles, {theme} from '../../../styles';

export const AppHeader = ({navigation, route, title}) => {
  return (
    <View style={styles.header}>
      <MaterialCommunityIcons
        onPress={() => navigation.openDrawer()}
        styles={styles.icon}
        name="apps"
        size={30}
        color="#fff"
      />
      <View style={{flex: 2}}>
        <Text style={[styles.headerTitle, GStyles.textWhite]}>{title}</Text>
      </View>
      <View style={{marginLeft: 'auto'}}>
        <MaterialIcons name="notifications" size={30} color="#fff" />
      </View>
    </View>
  );
};

export const BackHeader = ({navigation, route, title, screen = null}) => {
  return (
    <View style={styles.header}>
      <MaterialIcons
        onPress={() =>
          screen === null ? navigation.goBack() : navigation.navigate(screen)
        }
        styles={styles.icon}
        name="arrow-back"
        size={30}
        color="#fff"
      />
      <View style={{width: '100%'}}>
        <Text style={[styles.headerTitle, GStyles.textWhite]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
    marginLeft: 15,
  },
  icon: {
    marginLeft: 16,
  },
});
