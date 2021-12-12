/* eslint-disable react-native/no-inline-styles */
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {border, theme} from '../../styles';
import {AppHeader} from '../components/layouts/Headers';
import Loader from '../components/Loader';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
// import ProductItem from '../components/ProductItem';

const windowWidth = Dimensions.get('window').width;

/**
 * The home page
 * @returns JSX Element
 */
const HomeScreen = ({navigation, route}) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategorie, setSelectedCategorie] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const loadData = async () => {
    setLoading(true);
    try {
      const categoriesSnapShot = await firestore()
        .collection('categories')
        .get();
      setCategories(
        categoriesSnapShot.docs.map(item => ({...item._data, id: item.id})),
      );
      const productsSnapShot = await firestore().collection('products').get();
      setProducts(
        productsSnapShot.docs.map(item => ({...item._data, id: item.id})),
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

  useEffect(() => {
    setFilteredProducts(
      selectedCategorie === null
        ? products
        : products.filter(product => product.categoryRef === selectedCategorie),
    );
  }, [selectedCategorie, products]);
  return (
    <View style={{height: '100%', backgroundColor: '#fff'}}>
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <View>
          {/* header */}
          <AppHeader
            navigation={navigation}
            route={route}
            title="AGROAPPLINE"
          />
          {/* body */}

          <SearchBar />

          {!loading ? (
            <>
              {/* categories */}
              <View>
                <ScrollView
                  contentContainerStyle={[style.categoriesScroll]}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}>
                  {categories.map(category => (
                    <CategoryItem
                      category={category}
                      key={category.id}
                      onPress={() =>
                        navigation.navigate('ProductsListScreen', {
                          id: category.id,
                        })
                      }
                    />
                  ))}
                </ScrollView>
              </View>
              <View
                style={[
                  {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: windowWidth,
                    paddingHorizontal: 12,
                    marginVertical: 8,
                  },
                ]}>
                <Text
                  style={[
                    {
                      fontSize: 16,
                      fontFamily: 'ProductSans-Bold',
                    },
                  ]}>
                  Trouver des fruits frais
                </Text>
                <MoreButton
                  text="Voir plus"
                  onPress={() => navigation.navigate('ProductsListScreen')}
                />
              </View>

              {/* products */}
              <View
                style={[
                  {
                    width: '100%',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  },
                ]}>
                {products.map((product, index) => (
                  <ProductItem
                    index={index}
                    product={product}
                    key={product.id}
                    onPress={() =>
                      navigation.navigate('ProductDetailsScreen', {
                        id: product.id,
                      })
                    }
                  />
                ))}
              </View>
            </>
          ) : (
            <Loader />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

// search bar
const SearchBar = () => {
  return (
    <View
      style={[
        {
          height: 80,
          // marginBottom: 5,
          backgroundColor: theme.colors.primary,
          justifyContent: 'center',
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          marginBottom: 15,
        },
      ]}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={[
            {
              flexDirection: 'row',
              width: '90%',
              height: 40,
              borderRadius: 5,
              overflow: 'hidden',
              backgroundColor: '#fefefe',
            },
          ]}>
          <View
            style={{
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcons name={'search'} color={'#0005'} size={35} />
          </View>
          <View style={{width: '80%'}}>
            <TextInput
              placeholder="Recherche..."
              style={[
                {
                  borderRadius: 2,
                  fontSize: 17,
                  fontFamily: 'ProductSans-Medium',
                  width: '100%',
                  justifyContent: 'center',
                  color: '#0005',
                },
              ]}
              placeholderTextColor={'#0005'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

// produits
const ProductItem = ({product, farmerName, onPress}) => {
  return (
    <View
      style={[
        {
          borderRadius: 5,
          overflow: 'hidden',
          marginBottom: 14,
          marginHorizontal: 8,
          width: '43%',
          shadowColor: '#000',
          elevation: 3,
        },
      ]}>
      <TouchableOpacity
        style={[
          {
            height: 180,
            flex: 1,
          },
        ]}
        onPress={onPress}>
        {/* image du products */}
        <Image
          source={{uri: product.poster}}
          style={{width: '100%', height: 130}}
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
                width: '25%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 5,
              },
            ]}>
            <Image
              source={require('./../assets/images/Mark-Zuckerberg.jpg')}
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
                justifyContent: 'center',
              },
            ]}>
            <Text
              style={[
                style.productInfos,
                {fontSize: 15, fontFamily: 'ProductSans-Medium'},
              ]}>
              {product.name}
            </Text>
            {farmerName && (
              <Text
                style={[
                  style.productInfos,
                  {
                    fontFamily: 'ProductSans-Medium',
                  },
                ]}>
                {farmerName}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

/**
 * Affiche une categorie
 * @param {String} param0 le nom de la categorie
 * @returns JSX la vue
 */
const CategoryItem = ({category, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[
        {
          justifyContent: 'center',
          // justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        },
      ]}>
      <View style={[style.categoriesCycle]}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{uri: category.image}}
        />
      </View>
      <Text
        style={[
          style.categoriesName,
          {
            fontFamily: 'ProductSans-Medium',
          },
        ]}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

/**
 * La zone de text du more element
 * @param {String} param0 le texte referent le plus !
 * @returns JSX la vue
 */
const MoreButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={[style.moreButton]} onPress={onPress}>
      <Text
        style={[
          style.moreButtonText,
          {
            fontFamily: 'ProductSans-Medium',
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

// style
const style = StyleSheet.create({
  moreButton: {
    padding: 10,
  },
  moreButtonText: {
    textAlign: 'right',
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  categoriesScroll: {
    height: 90,
  },
  categoriesName: {
    color: '#333',
    // fontWeight: '700',
    fontSize: 13,
  },
  categoriesContainerName: {
    backgroundColor: theme.colors.primary + 'cf',
    position: 'absolute',
    width: '100%',
    height: 40,
    bottom: 0,
    justifyContent: 'center',
    padding: 6,
  },
  categoriesCycle: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 4,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginBottom: 7,
    overflow: 'hidden',
  },
});

export default HomeScreen;
