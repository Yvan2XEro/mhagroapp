import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'react-native-paper';

const GStyles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  textWhite: {
    color: 'white',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
export default GStyles;
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    // primary: '#3852E4',
    primary: '#00AE6F',
    secondary: '#414757',
    error: '#f13a59',
  },
};
