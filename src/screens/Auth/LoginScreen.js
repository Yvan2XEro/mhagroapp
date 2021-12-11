import React, {useContext, useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {theme} from '../../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  AuthenticationContext,
  GOOGLE,
} from '../../contexts/AuthenticationProvider';
import {regex} from './RegisterScreen';

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
      <Text style={styles.title}>Login</Text>
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
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        style={styles.input}
        onChangeText={text => setEmail(text)}
        error={email != '' && !regex.test(email)}
        errorText={'Invalid email!'}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        style={styles.input}
        onChangeText={text => setPassword(text)}
        error={password != '' && password.length < 6}
        errorText={password}
        secureTextEntry
      />
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
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {fontSize: 31, fontWeight: 'bold', color: theme.colors.primary},
});
