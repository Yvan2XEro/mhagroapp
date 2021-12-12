import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ProductItem({product, onPress}) {
  return (
    <View
      style={[
        {
          borderRadius: 5,
          overflow: 'hidden',
          marginBottom: 8,
          marginLeft: 8,
          width: '47%',
          shadowColor: '#000',
          elevation: 4,
        },
      ]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            height: 210,
            flex: 1,
          },
        ]}>
        {/* image du products */}
        <Image
          source={{uri: product.poster}}
          style={{width: '100%', height: 160}}
        />
        {/* les informations a propos du produits */}
        <View
          style={[
            {
              height: 50,
              backgroundColor: '#fff',
              justifyContent: 'center',
              width: '100%',
              flexDirection: 'row',
            },
          ]}>
          <View
            style={[
              {
                width: '20%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/05/02/11/58/farmer-1367104__340.jpg',
              }}
              style={{width: 30, height: 30, borderRadius: 100}}
            />
          </View>
          {/* infos */}
          <View
            style={[
              {
                width: '80%',
                height: '100%',
                flexDirection: 'column',
                paddingBottom: 2,
                paddingLeft: 4,
              },
            ]}>
            <Text
              style={[styles.productInfos, {fontSize: 15, fontWeight: 'bold'}]}>
              {product.name}
            </Text>
            <Text style={[styles.productInfos]}>"Jean Augustin"</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  productInfos: {
    color: '#0009',
  },
});
