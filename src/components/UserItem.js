import React from 'react';
import {Image} from 'react-native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theme} from '../../styles';

const UserItem = ({user, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.box}>
        <Image style={styles.image} source={{uri: user.image}} />
        <View style={styles.boxContent}>
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, elit consectetur
            </Text>
          </View>
        </View>
        <View style={{flex: 1.5, alignItems: 'center'}}>
          <FontAwesome
            color={theme.colors.primary}
            name="map-marker"
            size={17}
          />
          <Text style={{fontSize: 10}}>Dschang</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    flex: 2.3,
  },
  box: {
    borderRadius: 10,
    paddingVertical: 2,
    paddingRight: 5,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: 'white',
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.41,
    elevation: 5,
  },
  boxContent: {
    flex: 4,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  description: {
    fontSize: 13,
    color: '#646464',
  },
  name: {
    fontSize: 16,
    color: '#151515',
  },
});
