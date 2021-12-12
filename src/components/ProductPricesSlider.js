import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PriceSlideItem from './PriceSlideItem';

const ProductPricesSlider = ({onPressInItem}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setcarouselItems] = useState([
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          {carouselItems.map(item => (
            <PriceSlideItem onPress={onPressInItem} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductPricesSlider;

const styles = StyleSheet.create({});
