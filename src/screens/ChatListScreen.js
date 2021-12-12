import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import {theme} from '../../styles';

const ChatListScreen = ({navigation}) => {
  const [favourites, setFavourites] = useState([
    'https://cdn.pixabay.com/photo/2021/08/08/10/03/farmers-6530445__480.jpg',
    'https://cdn.pixabay.com/photo/2016/11/08/05/35/agriculture-1807549__340.jpg',
    'https://cdn.pixabay.com/photo/2017/09/28/13/27/nature-2795521__340.jpg',
    'https://cdn.pixabay.com/photo/2016/07/31/09/25/market-1558658__340.jpg',
    'https://cdn.pixabay.com/photo/2021/11/12/04/57/farm-6788020__340.jpg',
    'https://cdn.pixabay.com/photo/2017/07/18/23/54/peasants-2517476__340.jpg',
  ]);
  return (
    <View>
      <ScrollView>
        <Card style={{padding: 5}}>
          <View style={{marginLeft: 5}}>
            <Text>ONLINE Users</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {favourites.map((favorite, i) => (
              <TouchableOpacity key={i} style={{marginLeft: 5}}>
                <Avatar.Image source={{uri: favorite}} />
                <View
                  style={{
                    backgroundColor: theme.colors.primary,
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    position: 'absolute',
                    right: 4,
                    bottom: 4,
                  }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Card>

        <Card style={{marginTop: 4, padding: 3}}>
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigation.navigate('ChatRoomScreen')}>
            <Avatar.Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2017/07/18/23/54/peasants-2517476__340.jpg',
              }}
            />
            <View
              style={{
                marginLeft: 5,
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
              }}>
              <View>
                <Text>Elystin Renoi</Text>
                <Text style={{fontSize: 9}}>
                  Specialiste dans les elevages de porcs
                </Text>
              </View>
            </View>
            <Text style={{marginLeft: 'auto'}}>08:36AM</Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </View>
  );
};

const OneChatContact = ({}) => {
  return <View></View>;
};
const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    marginTop: 5,
  },
});
export default ChatListScreen;
