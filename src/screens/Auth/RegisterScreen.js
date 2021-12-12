import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {theme} from '../../../styles';
import {AuthenticationContext} from '../../contexts/AuthenticationProvider';
import {styles} from './LoginScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Register from '../../assets/Register';

export const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const {setUser, login, register} = useContext(AuthenticationContext);

  const handleSignUp = () => {
    setError('');
    setLoading(true);
    register({email, password})
      .then(() => {
        login({email, password});
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use')
          setError('That email address is already in use!');
      })
      .then(() => setLoading(false));
  };
  return (
    <View style={{padding: 20}}>
      <View style={{marginBottom: 15}}>
        <Register width={400} height={100} style={{alignSelf: 'center'}} />
      </View>
      {error != '' && <Text style={{color: theme.colors.error}}>{error}</Text>}
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <MaterialIcons
            name="person"
            style={{
              zIndex: 2,
              position: 'absolute',
              left: 10,
              top: -17,
              color: theme.colors.primary,
            }}
            size={30}
          />
        </View>
        <TextInput
          style={styles.input}
          label="Name"
          returnKeyType="next"
          value={name}
          onChangeText={text => setName(text)}
          error={name != '' && name.length < 3}
          errorText="Too short!"
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View>
          <MaterialIcons
            name="email"
            style={{
              zIndex: 2,
              position: 'absolute',
              left: 10,
              top: -17,
              color: theme.colors.primary,
            }}
            size={30}
          />
        </View>
        <TextInput
          style={styles.input}
          label="Email"
          returnKeyType="next"
          value={email}
          onChangeText={text => setEmail(text)}
          error={email != '' && !regex.test(email)}
          errorText={'Invalid email!'}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View>
          <MaterialIcons
            name="vpn-key"
            style={{
              zIndex: 2,
              position: 'absolute',
              left: 10,
              top: -17,
              color: theme.colors.primary,
            }}
            size={30}
          />
        </View>
        <TextInput
          style={styles.input}
          label="Password"
          returnKeyType="done"
          value={password}
          onChangeText={text => setPassword(text)}
          error={password != '' && password.length < 6}
          errorText={'Password is too short!'}
          secureTextEntry
        />
      </View>
      <Button
        disabled={!regex.test(email) || name.length < 3 || password.length < 4}
        mode="contained"
        loading={loading}
        onPress={handleSignUp}
        style={{marginTop: 24}}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Vous avez deja un compte? </Text>
        <TouchableOpacity
          style={styles.linkBock}
          onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
