import React, {Component} from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;

/**
 * The home page
 * @returns JSX Element
 */
const HomeScreen = ({navigation, route}) => {
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

          {/* categories */}
          <View>
            <ScrollView
              contentContainerStyle={[style.categoriesScroll]}
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              <Categories categoriesName={'categories 1'} />
              <Categories categoriesName={'categories 2'} />
              <Categories categoriesName={'categories 3'} />
              <Categories categoriesName={'categories 4'} />
            </ScrollView>
          </View>

          <View
            style={[
              {
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                width: windowWidth,
                paddingLeft: 6,
                paddingRight: 6,
                marginBottom: 7,
              },
            ]}>
            <Text style={[{fontSize: 19, fontWeight: 'bold'}]}>
              Find Fresh Fruits
            </Text>
            <MoreButton text={'View All'} />
          </View>

          {/* products */}
          <View
            style={[{width: '100%', flexWrap: 'wrap', flexDirection: 'row'}]}>
            <Products productName={'product name 1'} farmerName={'Raoul 1'} />
            <Products productName={'product name 2'} farmerName={'Raoul 2'} />
            <Products productName={'product name 3'} farmerName={'Raoul 3'} />
            <Products productName={'product name 3'} farmerName={'Raoul 3'} />
            <Products productName={'product name 3'} farmerName={'Raoul 3'} />
            <Products productName={'product name 3'} farmerName={'Raoul 3'} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const SearchBar = () => {
  return (
    <View
      style={[
        {
          height: 80,
          marginBottom: 5,
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
              width: '80%',
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
              placeholder="search"
              style={[
                {
                  borderRadius: 2,
                  fontSize: 17,
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
const Products = ({productName, farmerName}) => {
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
        style={[
          {
            height: 210,
            flex: 1,
          },
        ]}>
        {/* image du products */}
        <Image
          source={require('./../assets/images/5c933a01240000f7054e356e.jpeg')}
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
              },
            ]}>
            <Text
              style={[style.productInfos, {fontSize: 15, fontWeight: 'bold'}]}>
              {productName}
            </Text>
            <Text style={[style.productInfos]}>{farmerName}</Text>
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
const Categories = ({categoriesName}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        {
          justifyContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        },
      ]}>
      <TouchableOpacity style={[style.categoriesCycle]}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('./../assets/images/b8a7d459d3_127369_difference-fruit-legume.jpg')}
        />
      </TouchableOpacity>
      <Text style={[style.categoriesName]}>{categoriesName}</Text>
    </TouchableOpacity>
  );
};

/**
 * La zone de text du more element
 * @param {String} param0 le texte referent le plus !
 * @returns JSX la vue
 */
const MoreButton = ({text}) => {
  return (
    <View style={[style.moreButton]}>
      <Text style={[style.moreButtonText]}>{text}</Text>
    </View>
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
  },
  categoriesScroll: {
    height: 90,
  },
  categoriesName: {
    color: '#0009',
    fontWeight: '700',
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
  productInfos: {
    color: '#0009',
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
