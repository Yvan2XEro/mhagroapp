import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ProductItem from '../components/ProductItem';
import firestore from '@react-native-firebase/firestore';
import Loader from '../components/Loader';

const ProductsListScreen = ({route}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadData = async () => {
    setLoading(true);
    try {
      let productsSnapShot = null;
      if (!route.params || !route.params.id)
        productsSnapShot = await firestore().collection('products').get();
      else
        productsSnapShot = await firestore()
          .collection('products')
          .where('categoryRef', '==', route.params.id)
          .get();
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

  return !loading ? (
    <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View style={[{flexWrap: 'wrap', flexDirection: 'row'}]}>
        {products.map(product => (
          <ProductItem product={product} key={product.id} />
        ))}
      </View>
    </ScrollView>
  ) : (
    <Loader />
  );
};

export default ProductsListScreen;
