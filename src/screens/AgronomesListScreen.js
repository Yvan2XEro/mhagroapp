import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import UserItem from '../components/UserItem';

const AgronomesListScreen = ({navigation}) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      name: 'Yvan Kana',
    },
    {
      id: 2,
      image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      name: 'Evariste Kana',
    },
    {
      id: 3,
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      name: 'Leopold Zebaze',
    },
    {
      id: 4,
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      name: 'Raoul Le grand',
    },
    {
      id: 5,
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      name: 'Temjio Leroi',
    },
    {
      id: 6,
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
      name: 'Temfacte Rene',
    },
    {
      id: 7,
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      name: 'Agoumtio Norber',
    },
    {
      id: 8,
      image: 'https://bootdey.com/img/Content/avatar/avatar8.png',
      name: 'Dongmo Nadege',
    },
    {
      id: 9,
      image: 'https://bootdey.com/img/Content/avatar/avatar9.png',
      name: 'Donjio Solange',
    },
  ]);

  const fetchUsers = async () => {
    try {
      const usersSnapshot = await firestore().collection('users').get();
      // setUsers(usersSnapshot.docs.map(item => item.data()));
    } catch (error) {
      console.error(usersSnapshot);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const eventClickLister = userId => {
    navigation.navigate('AgronomeDetailsScreen', {
      id: userId,
    });
  };

  return (
    <View>
      <View style={{marginHorizontal: 10}}>
        <FlatList
          enableEmptySections={true}
          data={users}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => (
            <UserItem user={item} onPress={() => eventClickLister(item.id)} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default AgronomesListScreen;
