import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';
import Button from '../../components/button/Button';

type BookingConfirmedProps = {
  navigation: NativeStackNavigationProp<
    RootStateParamsList,
    'BookingConfirmed'
  >;
};
const BookingConfirmed = ({
  navigation,
}: BookingConfirmedProps): React.JSX.Element => {
  const handleBackHome = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          source={require('../../assets/icon/ic_confirmed.png')}
          resizeMode="contain"
          style={styles.icon}
        />
        <Text style={[styles.txtMed, {fontFamily: 'Hanuman-Bold'}]}>
          Your booking is{'\n'}now confirmed
        </Text>
      </View>

      <Button title={'Back home'} onPress={handleBackHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
  },
  icon: {
    width: 200,
    height: 200,
  },
  boxTxt: {
    flexDirection: 'row',
  },
  txtMed: {
    fontSize: 34,
    color: 'black',
    fontWeight: '800',
  },
  txtKit: {
    fontSize: 34,
    color: 'black',
    fontWeight: '300',
  },
});

export default BookingConfirmed;
