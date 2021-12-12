import React, {useCallback, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PricesSheet from '../components/PricesSheet';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ProductPricesSlider from '../components/ProductPricesSlider';
import {Avatar} from 'react-native-paper';
import {theme} from '../../styles';

const ProductsPricesScreen = () => {
  const panelRef = useRef(null);
  const [openSheet, setOpenSheet] = useState(false);
  const openInSheet = () => {
    handlePresentModalPress();
    setOpenSheet(true);
  };
  // callbacks
  const handlePresentModalPress = useCallback(() => {
    panelRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <BottomSheetModalProvider>
      <ScrollView style={{paddingTop: 10}}>
        <View style={{marginBottom: 10}}>
          <View style={[styles.row, styles.header]}>
            <Avatar.Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2018/05/19/18/05/pineapple-3413953__340.jpg',
              }}
              size={45}
            />
            <Text style={{color: 'white', fontSize: 16}}>Un super produit</Text>
          </View>
          <ProductPricesSlider onPressInItem={() => openInSheet()} />
        </View>
        <View style={{marginBottom: 10}}>
          <View style={[styles.row, styles.header]}>
            <Avatar.Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2018/05/19/18/05/pineapple-3413953__340.jpg',
              }}
              size={45}
            />
            <Text style={{color: 'white', fontSize: 16}}>Un super produit</Text>
          </View>
          <ProductPricesSlider onPressInItem={() => openInSheet()} />
        </View>
        <View style={{marginBottom: 10}}>
          <View style={[styles.row, styles.header]}>
            <Avatar.Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2018/05/19/18/05/pineapple-3413953__340.jpg',
              }}
              size={45}
            />
            <Text style={{color: 'white', fontSize: 16}}>Un super produit</Text>
          </View>
          <ProductPricesSlider onPressInItem={() => openInSheet()} />
        </View>
        <View style={{marginBottom: 10}}>
          <View style={[styles.row, styles.header]}>
            <Avatar.Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2018/05/19/18/05/pineapple-3413953__340.jpg',
              }}
              size={45}
            />
            <Text style={{color: 'white', fontSize: 16}}>Un super produit</Text>
          </View>
          <ProductPricesSlider onPressInItem={() => openInSheet()} />
        </View>
        <View style={{marginBottom: 10}}>
          <View style={[styles.row, styles.header]}>
            <Avatar.Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2018/05/19/18/05/pineapple-3413953__340.jpg',
              }}
              size={45}
            />
            <Text style={{color: 'white', fontSize: 16}}>Un super produit</Text>
          </View>
          <ProductPricesSlider onPressInItem={() => openInSheet()} />
        </View>
        <View style={{marginBottom: 10}}>
          <View style={[styles.row, styles.header]}>
            <Avatar.Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2018/05/19/18/05/pineapple-3413953__340.jpg',
              }}
              size={45}
            />
            <Text style={{color: 'white', fontSize: 16}}>Un super produit</Text>
          </View>
          <ProductPricesSlider onPressInItem={() => openInSheet()} />
        </View>
      </ScrollView>
      <PricesSheet
        handlePresentModalPress={handlePresentModalPress}
        handleSheetChanges={handleSheetChanges}
        onClose={() => {}}
        isOpen={openSheet}
        panelRef={panelRef}
      />
    </BottomSheetModalProvider>
  );
};

export default ProductsPricesScreen;
const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: 'red',
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
