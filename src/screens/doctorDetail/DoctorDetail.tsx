import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';
import Button from '../../components/button/Button';
import {RouteProp} from '@react-navigation/native';

type DoctorDetailProps = {
  navigation: NativeStackNavigationProp<RootStateParamsList, 'DoctorDetail'>;
  route: RouteProp<RootStateParamsList, 'DoctorDetail'>;
};
const DoctorDetail = ({
  navigation,
  route,
}: DoctorDetailProps): React.JSX.Element => {
  const {image, name, desc, rate, patients, about} = route.params;

  const handleBook = () => {};

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={handleBack}>
        <Image
          style={styles.icon}
          source={require('../../assets/icon/ic_back.png')}
        />
      </TouchableOpacity>

      <View style={styles.container}>
        <Image style={styles.imgUser} source={image} />
        <Text style={styles.txtName}>{name}</Text>
        <Text style={styles.txtDesc}>{desc}</Text>

        <View style={styles.boxHorizontal}>
          <View style={styles.box}>
            <Image
              style={styles.icon}
              source={require('../../assets/icon//ic_rate.png')}
            />
            <Text style={styles.txt}>{`${rate}/5`}</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.txt}>{patients}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.txtAbout}>About</Text>

      <Text style={styles.txtContentAbout}>{about}</Text>

      <View style={styles.button}>
        <Button title={'Book appointment'} onPress={handleBook} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  imgUser: {
    width: 110,
    height: 110,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  txtDesc: {
    marginTop: 4,
    fontSize: 14,
    color: '#1A2C48',
  },
  txtName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A2C48',
  },
  boxHorizontal: {
    marginTop: 20,
    flexDirection: 'row',
    columnGap: 10,
  },

  box: {
    backgroundColor: '#FAFAFA',
    padding: 14,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 6,
  },
  txt: {
    fontSize: 14,
    color: '#1A2C48',
    fontWeight: 'bold',
  },
  txtAbout: {
    fontSize: 14,
    color: '#1A2C48',
    fontWeight: 'bold',
    marginTop: 30,
  },
  txtContentAbout: {
    fontSize: 14,
    color: '#1A2C48',
    marginTop: 10,
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    left: 20,
  },
});

export default DoctorDetail;
