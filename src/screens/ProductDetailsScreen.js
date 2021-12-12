import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {border, theme} from '../../styles';
import firestore from '@react-native-firebase/firestore';
import Entypo from 'react-native-vector-icons/Entypo';
import Loader from '../components/Loader';

const windowWidth = Dimensions.get('window').width;

const ProductDetailsScreen = props => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    quantity: 0,
    categoryRef: '',
    unity: '',
    poster: 'src',
  });
  const loadData = async () => {
    setLoading(true);
    try {
      const productSnapshot = await firestore()
        .collection('products')
        .doc(props.route.params.id)
        .get();
      setProduct({...productSnapshot.data(), id: productSnapshot.id});
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return !loading ? (
    <View style={[{height: '100%', width: '100%'}]}>
      <View>
        {/* header */}
        <View
          style={[
            {
              position: 'absolute',
              top: 0,
              backgroundColor: '#0002',
              zIndex: 2,
              width: '100%',
              padding: 7,
            },
          ]}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 5,
            }}>
            <MaterialIcons
              name="arrow-back"
              color={'#fff'}
              size={29}
              onPress={() => props.navigation.goBack()}
            />
            <MaterialIcons
              name="info-outline"
              color={'transparent'}
              size={29}
            />
          </View>
        </View>
        {/* image */}
        <View
          style={[
            {
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
              height: '60%',
              width: '100%',
            },
          ]}>
          <View style={{width: '100%'}}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              contentContainerStyle={[
                {
                  height: '100%',
                },
              ]}>
              <View>
                <Image
                  source={{uri: product.poster}}
                  style={{
                    height: '100%',
                    width: windowWidth,
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('./../assets/images/b8a7d459d3_127369_difference-fruit-legume.jpg')}
                  style={{
                    height: '100%',
                    width: windowWidth,
                  }}
                />
              </View>
              <View>
                <Image
                  source={require('./../assets/images/5c933a01240000f7054e356e.jpeg')}
                  style={{
                    height: '100%',
                    width: windowWidth,
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
        {/* infos */}
        <View
          style={[
            {
              height: '43.5%',
              width: '100%',
              backgroundColor: '#fff',
              borderTopRightRadius: 35,
              borderTopLeftRadius: 35,
              top: -55,
              overflow: 'hidden',
            },
          ]}>
          <ScrollView
            contentContainerStyle={[
              {
                width: '100%',
                alignItems: 'center',
                paddingLeft: 25,
              },
            ]}
            scrollEnabled={true}>
            <View style={[{width: '100%', height: '100%'}]}>
              {/* nom du produit */}
              <View style={[{marginTop: 15, width: '80%', padding: 2}]}>
                <Text style={[style.bigText]}>Nom du produit</Text>
              </View>
              <View style={[{width: '80%', padding: 2}]}>
                <Text style={[style.smallText]}>{product.name}</Text>
              </View>

              {/* nom de la ville */}
              <View
                style={[
                  {justifyContent: 'flex-start', width: '80%', padding: 2},
                ]}>
                <Text style={[style.bigText]}>Ville</Text>
              </View>
              <View style={[{width: '80%', padding: 2, flexDirection: 'row'}]}>
                <MaterialIcons name="location-on" color={'#0006'} size={19} />
                <Text style={[style.smallText, {marginLeft: 4}]}>Dschang</Text>
              </View>

              {/* nom du marche */}
              <View
                style={[
                  {justifyContent: 'flex-start', width: '80%', padding: 2},
                ]}>
                <Text style={[style.bigText]}>Marche</Text>
              </View>
              <View style={[{width: '80%', padding: 2, flexDirection: 'row'}]}>
                <Entypo name="shop" color={'#0006'} size={19} />
                <Text style={[style.smallText, {marginLeft: 4}]}>
                  Marche Foto
                </Text>
              </View>

              {/* unite */}
              <View
                style={[
                  {justifyContent: 'flex-start', width: '80%', padding: 2},
                ]}>
                <Text style={[style.bigText]}>Unite</Text>
              </View>
              <View style={[{width: '80%', padding: 2, flexDirection: 'row'}]}>
                <Text style={[style.smallText, {marginLeft: 4}]}>Tonne</Text>
              </View>

              {/* prix actuel */}
              <View
                style={[
                  {justifyContent: 'flex-start', width: '80%', padding: 2},
                ]}>
                <Text style={[style.bigText]}>Prix actuel</Text>
              </View>
              <View style={[{width: '80%', padding: 2, flexDirection: 'row'}]}>
                <Text style={[style.smallText, {marginLeft: 4}]}>
                  12 000 F cfa
                </Text>
              </View>

              {/* unite */}
              <View
                style={[
                  {justifyContent: 'flex-start', width: '80%', padding: 2},
                ]}>
                <Text style={[style.bigText]}>Mise a jour</Text>
              </View>
              <View style={[{width: '80%', padding: 2, flexDirection: 'row'}]}>
                <Text style={[style.smallText, {marginLeft: 4}]}>
                  02/12/2021, 00:12:24
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* button */}
          <TouchableOpacity
            style={[style.btn, style.center, {alignSelf: 'center'}]}>
            <Text style={[style.btnText]}>Contacter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <Loader />
  );
};

const style = StyleSheet.create({
  bigText: {color: '#0009', fontSize: 16, fontWeight: 'bold'},
  smallText: {color: '#0009', fontSize: 16},
  center: {justifyContent: 'center', alignItems: 'center'},
  btnText: {color: '#fff', fontSize: 19, fontWeight: 'bold'},
  btn: {
    backgroundColor: theme.colors.primary,
    width: '80%',
    padding: 8,
    borderRadius: 8,
  },
});

export default ProductDetailsScreen;
