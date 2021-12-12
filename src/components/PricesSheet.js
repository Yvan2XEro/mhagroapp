import React, {useMemo} from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
  ChartXLabel,
  monotoneCubicInterpolation,
} from '@rainbow-me/animated-charts';
import {theme} from '../../styles';
import {Avatar, Text} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const {width: SIZE} = Dimensions.get('window');

export const formatDatetime = value => {
  'worklet';
  if (value === '') {
    return '';
  }
  const date = new Date(Number(value * 1000));
  const m = date.getMinutes();
  const h = date.getHours();
  const d = date.getDate();
  const n = date.getMonth();
  const y = date.getFullYear();
  return `${y}-${n}-${d} ${h}:${m}`;
};

export const formatUSD = value => {
  'worklet';
  if (value === '') {
    return '';
  }
  return `FCFA ${value.toLocaleString('en-US', {
    currency: 'USD',
  })}`;
};

export const data = [
  {x: 1653075200, y: 4007},
  {x: 1653161600, y: 3007},
  {x: 1653248000, y: 5003},
  {x: 1653334400, y: 5004},
  {x: 1653420800, y: 5002},
  {x: 1653507200, y: 1000},
  {x: 1653593600, y: 100},
  {x: 1653680000, y: 500},
  {x: 1653766400, y: 300},
  {x: 1653852800, y: 4002},
  {x: 1653939200, y: 5005},
  {x: 1654025600, y: 4001},
  {x: 1654112000, y: 4003},
  {x: 1654198400, y: 200},
];

const points = monotoneCubicInterpolation({data, range: 40});

const PricesSheet = ({panelRef, handleSheetChanges}) => {
  const snapPoints = useMemo(() => ['25%', '70%'], []);

  return (
    <View>
      <BottomSheetModal
        ref={panelRef}
        index={1}
        snapPoints={snapPoints}
        handleStyle={styles.bottomSheet}
        onChange={handleSheetChanges}>
        <View
          style={{paddingTop: 5, backgroundColor: '#DEE0E6', height: '100%'}}>
          <ChartPathProvider data={{points, smoothingStrategy: 'bezier'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 3,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Avatar.Image
                  source={{
                    uri: 'https://cdn.pixabay.com/photo/2018/05/19/18/05/pineapple-3413953__340.jpg',
                  }}
                  size={40}
                />
                <View>
                  <Text>Les ananas</Text>
                  <Text>
                    <FontAwesome
                      color={theme.colors.primary}
                      name="map-marker"
                      size={15}
                    />{' '}
                    Dschang
                  </Text>
                </View>
              </View>
              <View>
                <Text>Prix actuel:</Text>
                <Text style={{color: 'green'}}>22 000 FCFA</Text>
              </View>
            </View>
            <View style={styles.chartLabels}>
              <ChartYLabel
                format={formatUSD}
                style={{
                  color: theme.colors.primary,
                  margin: 4,
                }}
              />
              <ChartXLabel
                format={formatDatetime}
                style={{
                  color: theme.colors.secondary,
                  margin: 4,
                }}
              />
            </View>
            <View style={{marginVertical: 5}}>
              <ChartPath
                height={SIZE / 2}
                stroke={theme.colors.primary}
                width={SIZE}
              />
              <ChartDot style={{backgroundColor: 'blue'}} />
            </View>
          </ChartPathProvider>
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default PricesSheet;

const styles = StyleSheet.create({
  chartLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSheet: {},
});
