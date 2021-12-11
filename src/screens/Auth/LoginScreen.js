import React, {useContext, useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {theme} from '../../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  AuthenticationContext,
  GOOGLE,
} from '../../contexts/AuthenticationProvider';
import {regex} from './RegisterScreen';
import {Icon} from 'react-native-elements';
import Fp from '../../assets/Fp';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [googleLoading, setGoogleLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const {login} = useContext(AuthenticationContext);
  const handleSimpleLogin = () => {
    setError('');
    setLoading(true);
    login({email, password})
      .then(onLoginSuccess)
      .catch(error => {
        if (error.code == 'auth/user-not-found') {
          setPassword('');
          setError('Bad credentials!');
        }
      })
      .then(() => {
        setLoading(false);
        setGoogleLoading(false);
      });
  };

  const onLoginSuccess = () => {
    navigation.replace('PaymentScreen');
  };

  return (
    <View style={{padding: 20}}>
      <View style={{marginBottom: 15}}>
        <Fp width={400} height={100} style={{alignSelf: 'center'}} />
      </View>
      {error != '' && (
        <View
          style={{
            borderColor: theme.colors.error,
            borderWidth: 1,
            height: 30,
            marginTop: 5,
            borderRadius: 3,
            paddingHorizontal: 5,
          }}>
          <Text style={{color: theme.colors.error, fontWeight: '500'}}>
            <AntDesign name="warning" color={theme.colors.error} /> {error}
          </Text>
        </View>
      )}
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
            size={40}
          />
        </View>
        <TextInput
          label="Email"
          returnKeyType="next"
          placeholderTextColor={theme.colors.primary}
          value={email}
          style={[styles.input]}
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
            name="person"
            style={{
              zIndex: 2,
              position: 'absolute',
              left: 10,
              top: -17,
              color: theme.colors.primary,
            }}
            size={40}
          />
        </View>
        <TextInput
          label="Password"
          returnKeyType="done"
          placeholderTextColor={theme.colors.primary}
          value={password}
          style={styles.input}
          onChangeText={text => setPassword(text)}
          error={password != '' && password.length < 6}
          errorText={password}
          secureTextEntry
        />
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button
        disabled={!regex.test(email) || password == ''}
        mode="contained"
        loading={loading}
        onPress={handleSimpleLogin}>
        Login
      </Button>
      <Button
        style={{marginTop: 20}}
        loading={googleLoading}
        onPress={() => {
          setGoogleLoading(true);
          login({}, GOOGLE)
            .then(onLoginSuccess)
            .catch(() => setGoogleLoading(false));
        }}
        mode="contained"
        color={theme.colors.error}>
        <AntDesign name="google" size={20} color="white" /> With google account
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity
          style={styles.linkBock}
          onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

export const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  linkBock: {
    flex: 1,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  input: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    paddingLeft: 38,
  },
  title: {fontSize: 31, fontWeight: 'bold', color: theme.colors.primary},
});
