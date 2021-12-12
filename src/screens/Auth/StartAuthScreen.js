import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import LoginSvg from './../../assets/login.svg';
const StartAuthScreen = ({navigation}) => {
  return (
    <View style={{padding: 20}}>
      <View style={{alignItems: 'center'}}>
        <LoginSvg width={200} height={300} />
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button
        mode="outlined"
        style={{marginTop: 15}}
        onPress={() => navigation.navigate('RegisterScreen')}>
        Sign Up
      </Button>
    </View>
  );
};

export default StartAuthScreen;
