import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {Avatar, Card} from 'react-native-paper';
import {theme} from '../../styles';
import {BackHeader} from '../components/layouts/Headers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

const ChatRoomScreen = ({navigation, route}) => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      isMe: true,
      message: 'Hi',
      data: '06:30 PM',
    },
    {
      id: 1,
      isMe: true,
      message: "Hello c'est la team EROCLITE, qui va tester?",
      date: '09:00AM',
    },
    {
      id: 2,
      isMe: false,
      message: "Il s'agit d'une prise d'otages?",
      date: '09:00AM',
    },
    {
      id: 3,
      isMe: true,
      message: 'Bien sure en explosant une application en 24H',
      date: '09:00AM',
    },
    {
      id: 4,
      isMe: false,
      message: 'Waouhhhh!',
      date: '09:00AM',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  return (
    <View style={{height: '100%'}}>
      <BackHeader
        navigation={navigation}
        route={route}
        title="John Doe"
        withOptions={true}
      />
      <View style={{backgroundColor: theme.colors.primary, paddingLeft: 75}}>
        <Text style={{color: 'white'}}>online</Text>
      </View>
      <View>
        <ScrollView
          style={{marginBottom: 150}}
          showsVerticalScrollIndicator={false}>
          {messages.map(m => (
            <TouchableOpacity
              style={[
                styles.item,
                !m.isMe ? styles.leftItem : styles.rightItem,
              ]}
              key={m.id}>
              <Avatar.Image
                style={[styles.image, m.isMe ? {right: 5} : {left: 5}]}
                source={{
                  uri: 'https://cdn.pixabay.com/photo/2017/07/18/23/54/peasants-2517476__340.jpg',
                }}
                size={30}
              />
              <View style={styles.text}>
                <Text style={{color: m.isMe ? 'black' : 'white'}}>
                  {m.message}
                </Text>
                <Text style={{fontSize: 8}}>{m.date}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: 80,
          margin: 5,
          marginBottom: 0,
          padding: 5,
          paddingBottom: 20,
          backgroundColor: 'white',
          flexDirection: 'row',
          //   backgroundColor: 'red',
          width: '100%',
        }}>
        <TextInput
          style={[styles.textInput]}
          placeholder="Type message..."
          value={newMessage}
          onChangeText={text => setNewMessage(text)}
        />
        <TouchableOpacity
          style={{flex: 0.2}}
          onPress={() => {
            if (newMessage.length > 0) {
              setMessages([
                ...messages,
                {
                  id: messages.length,
                  message: newMessage,
                  date: moment(new Date()).format('hh:mm A'),
                },
              ]);
              Keyboard.dismiss();
              setNewMessage('');
            }
          }}>
          <MaterialCommunityIcons
            name="send"
            color={theme.colors.primary}
            size={50}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
  },
  item: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 10,
    padding: 5,
    width: '70%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.41,
    elevation: 5,
  },
  leftItem: {
    marginRight: 'auto',
    backgroundColor: theme.colors.primary,
  },
  rightItem: {
    marginLeft: 'auto',
  },
  text: {
    marginHorizontal: 25,
    marginTop: 25,
  },
  textInput: {
    flex: 0.8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.primary,
  },
});
