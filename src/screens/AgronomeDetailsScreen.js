import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar, Card} from 'react-native-paper';
import GStyles, {theme} from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AgronomeDetailsScreen = ({route, navigation}) => {
  return (
    <View>
      <ScrollView>
        <View>
          <Card
            style={{
              opacity: 0.8,
              justifyContent: 'center',
              width: '100%',
              marginBottom: 8,
              padding: 20,
            }}>
            <View style={{position: 'absolute', right: 5, top: 5}}>
              <Text style={[GStyles.textCenter]}>
                <FontAwesome
                  name="map-marker"
                  size={25}
                  color={theme.colors.primary}
                />
              </Text>
              <Text style={[GStyles.textCenter, styles.locations]}>
                Dschang
              </Text>
            </View>
            <Avatar.Image
              style={styles.avatar}
              source={{
                uri: `https://bootdey.com/img/Content/avatar/avatar${route.params.id}.png`,
              }}
              size={100}
            />
            <View style={styles.textWrapper}>
              <Text style={[styles.name, GStyles.textCenter, {color: 'black'}]}>
                John Doe
              </Text>
              <Text style={[styles.about, GStyles.textCenter]}>
                Un agronome qualifie dans plusieurs domaines, Je sui egalement
                comercant.
              </Text>
            </View>
          </Card>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ChatRoomScreen')}
              style={{flexDirection: 'row', paddingRight: 10}}>
              <Text style={{fontSize: 17}}>Contacts</Text>
              <Ionicons
                style={{marginLeft: 'auto'}}
                size={40}
                color={theme.colors.primary}
                name="chatbox-outline"
              />
            </TouchableOpacity>
            <View style={styles.contactWrapper}>
              <View style={[styles.contactItem, GStyles.flexRow]}>
                <MaterialIcons name="phone" size={40} />
                <View
                  style={{
                    marginLeft: 10,
                  }}>
                  <Text style={styles.contactItemText}>6563655473</Text>
                  <Text style={{fontSize: 10}}>Mobile</Text>
                </View>
              </View>
            </View>
            <View style={styles.contactWrapper}>
              <View style={[styles.contactItem, GStyles.flexRow]}>
                <View style={{marginLeft: 40}}></View>
                <View
                  style={{
                    marginLeft: 10,
                  }}>
                  <Text style={styles.contactItemText}>6563655473</Text>
                  <Text style={{fontSize: 10}}>Work</Text>
                </View>
              </View>
            </View>
            <View style={[styles.contactWrapper, {marginBottom: 20}]}>
              <View style={[styles.contactItem, GStyles.flexRow]}>
                <MaterialIcons name="email" size={40} />
                <View
                  style={{
                    marginLeft: 10,
                  }}>
                  <Text style={styles.contactItemText}>john@email.com</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AgronomeDetailsScreen;

const styles = StyleSheet.create({
  avatar: {
    alignSelf: 'center',
  },
  textWrapper: {},
  locations: {
    fontSize: 12,
  },
  name: {
    fontSize: 20,
  },
  about: {
    fontSize: 16,
  },
  contactWrapper: {
    marginTop: 5,
  },
  contactItemText: {
    fontSize: 20,
  },
  sepatator: {
    height: 2,
    marginLeft: 50,
    backgroundColor: '#D3D3D3',
    marginTop: 15,
  },
});
