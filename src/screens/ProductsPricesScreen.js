import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PricesSheet from '../components/PricesSheet';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ProductPricesSlider from '../components/ProductPricesSlider';
import {Avatar} from 'react-native-paper';
import {theme} from '../../styles';
import firestore from '@react-native-firebase/firestore';
import Loader from '../components/Loader';

const ProductsPricesScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadData = async () => {
    setLoading(true);
    try {
      let productsSnapShot = null;
      productsSnapShot = await firestore().collection('products').get();
      setProducts(
        productsSnapShot.docs.map(item => ({...item.data(), id: item.id})),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const subscriber = loadData();
    return () => subscriber;
  }, []);

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
  return !loading ? (
    <BottomSheetModalProvider>
      <ScrollView style={{paddingTop: 10}}>
        {products.map(p => (
          <View style={{marginBottom: 10}} key={p.id}>
            <View style={[styles.row, styles.header]}>
              <Avatar.Image
                source={{
                  uri: p.poster,
                }}
                size={45}
              />
              <Text style={{color: 'white', fontSize: 16}}>{p.name}</Text>
            </View>
            <ProductPricesSlider onPressInItem={() => openInSheet()} />
          </View>
        ))}
      </ScrollView>
      <PricesSheet
        handlePresentModalPress={handlePresentModalPress}
        handleSheetChanges={handleSheetChanges}
        onClose={() => {}}
        isOpen={openSheet}
        panelRef={panelRef}
      />
    </BottomSheetModalProvider>
  ) : (
    <Loader />
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
