import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  Switch,
} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';
import {RouteProp} from '@react-navigation/native';
import Button from '../../components/button/Button';

type MedicationDetailProps = {
  navigation: NativeStackNavigationProp<
    RootStateParamsList,
    'MedicationDetail'
  >;
  route: RouteProp<RootStateParamsList, 'MedicationDetail'>;
};

const MedicationDetail = ({
  navigation,
  route,
}: MedicationDetailProps): React.JSX.Element => {
  const {title, image} = route.params;
  const [currentDate, setCurrentDate] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    getCurrentDate();
  }, []);

  const getCurrentDate = () => {
    const date = new Date();
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    setCurrentDate(`${month} ${day}`);
  };

  const handelRequest = () => {};

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <View style={styles.boxTabBar}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/ic_back.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image style={styles.iconVitamin} source={image} />
        <Text style={styles.txtTitle}>{title}</Text>

        <View style={styles.box}>
          <View style={styles.boxTime}>
            <View style={styles.boxLeft}>
              <Image
                style={styles.icon}
                source={require('../../assets/icon/ic_notification.png')}
              />
              <Text>Everyday at 9:00</Text>
            </View>

            <View style={styles.switchWrapper}>
              <Switch
                trackColor={{false: 'white', true: 'white'}}
                thumbColor={isEnabled ? 'black' : 'black'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          <View style={styles.boxTime}>
            <View style={styles.boxLeft}>
              <Image
                style={styles.icon}
                source={require('../../assets/icon/ic_sun.png')}
              />
              <Text>Before meal</Text>
            </View>
          </View>

          <View style={styles.boxTime}>
            <View style={styles.boxLeft}>
              <Image
                style={styles.icon}
                source={require('../../assets/icon/ic_calendar.png')}
              />
              <Text>Finish course</Text>
            </View>

            <View style={styles.boxDate}>
              <Text style={styles.txtDate}>{currentDate}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.boxButton}>
        <Button title={'Request refill'} onPress={handelRequest} />
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
    flex: 1,
    alignItems: 'center',
  },
  boxTabBar: {
    paddingVertical: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconVitamin: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: '20%',
  },
  txtTitle: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500',
    color: '#1A2C48',
  },
  box: {
    width: '100%',
    marginTop: 40,
    rowGap: 10,
  },

  boxTime: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderRadius: 16,
    height: '16%',
  },
  boxLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  boxDate: {
    backgroundColor: '#D9DBE0',
    width: '24%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  txtDate: {
    color: '#1A2C48',
    fontWeight: '600',
  },
  boxButton: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    left: 20,
  },
  switchWrapper: {
    backgroundColor: 'white',
    borderWidth: 0.6,
    borderColor: 'black',
    borderRadius: 20,
  },
});

export default MedicationDetail;
