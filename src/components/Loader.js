import React from 'react';
import {ActivityIndicator} from 'react-native';
import {theme} from '../../styles';

const Loader = () => {
  return <ActivityIndicator size="large" color={theme.colors.primary} />;
};

export default Loader;
