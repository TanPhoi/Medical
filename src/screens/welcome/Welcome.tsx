import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';
import Button from '../../components/button/Button';

type WelcomeProps = {
  navigation: NativeStackNavigationProp<RootStateParamsList, 'Welcome'>;
};
const Welcome = ({navigation}: WelcomeProps): React.JSX.Element => {
  const handleNextHome = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          source={require('../../assets/icon/ic_medkit.png')}
          resizeMode="contain"
          style={styles.icon}
        />
        <View style={styles.boxTxt}>
          <Text style={[styles.txtMed, {fontFamily: 'Hanuman-Bold'}]}>Med</Text>
          <Text style={styles.txtKit}>Kit</Text>
        </View>
      </View>

      <Button title={'Start'} onPress={handleNextHome} />
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

export default Welcome;
