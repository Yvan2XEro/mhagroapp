import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {theme} from './../../styles';
import {numberFormat} from './../helpers';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';

const PriceSlideItem = ({item, index, onPress}) => {
  const {dismiss, dismissAll} = useBottomSheetModal();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 30,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.41,
        elevation: 5,
        borderRadius: 5,
        height: 200,
        marginLeft: 5,
        marginRight: 5,
        width: Dimensions.get('window').width - 20,
      }}>
      <View>
        <View style={styles.row}>
          <Text style={styles.labelText}>Actual price:</Text>
          <Text>{numberFormat(2000.06434)} FCFA</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.labelText}>Ville:</Text>
          <Text>Dschang</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.labelText}>Adress:</Text>
          <Text>marche B rue 12</Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Note:
          </Text>
          <Text
            style={{fontStyle: 'italic', textAlign: 'center', fontSize: 13}}>
            "Votre produit doit etre de bonne qualite"
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PriceSlideItem;

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelText: {
    fontSize: 17,
    flex: 3,
    fontWeight: 'bold',
  },
});
