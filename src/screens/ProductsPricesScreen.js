import React, {useCallback, useRef, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import PricesSheet from '../components/PricesSheet';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ProductPricesSlider from '../components/ProductPricesSlider';

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
      <ScrollView>
        <ProductPricesSlider onPressInItem={() => openInSheet()} />
        <ProductPricesSlider onPressInItem={() => openInSheet()} />
        <ProductPricesSlider onPressInItem={() => openInSheet()} />
        <ProductPricesSlider onPressInItem={() => openInSheet()} />
        <ProductPricesSlider onPressInItem={() => openInSheet()} />
        <ProductPricesSlider onPressInItem={() => openInSheet()} />
        <ProductPricesSlider onPressInItem={() => openInSheet()} />
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

const styles = StyleSheet.create({});
