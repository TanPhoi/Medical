import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';
import {RouteProp} from '@react-navigation/native';

type VideoCallProps = {
  navigation: NativeStackNavigationProp<RootStateParamsList, 'VideoCall'>;
  route: RouteProp<RootStateParamsList, 'VideoCall'>;
};

const VideoCall = ({navigation, route}: VideoCallProps): React.JSX.Element => {
  const {doctor, appointmentType} = route.params;

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const handleOffCall = () => {
    navigation.goBack();
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBack} onPress={handleBack}>
        <Image
          style={styles.iconBack}
          source={require('../../assets/icon/ic_back.png')}
        />
      </TouchableOpacity>

      <Image
        style={styles.imgUser}
        source={require('../../assets/icon/ic_user.jpg')}
      />
      <Image
        style={styles.imgDoctor}
        source={require('../../assets/image/img_doctor1.jpg')}
      />

      <View style={styles.boxTime}>
        <Text style={styles.txtDoctor}>{doctor}</Text>
        <Text style={styles.txtTime}>00:19:21</Text>
      </View>

      <View style={styles.boxBottom}>
        <TouchableOpacity style={styles.border}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/ic_mic.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxCall} onPress={handleOffCall}>
          <Image
            style={styles.iconCall}
            source={require('../../assets/icon/ic_call.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.border}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/ic_video.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  imgDoctor: {
    flex: 1,
    resizeMode: 'cover',
  },
  iconBack: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 20,
    left: 10,
    zIndex: 1,
  },
  imgUser: {
    width: 120,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    position: 'absolute',
    top: 70,
    right: 20,
    zIndex: 1,
  },
  boxTime: {
    position: 'absolute',
    bottom: 140,
    right: 0,
    left: 0,
    rowGap: 4,
  },
  txtDoctor: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  txtTime: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  boxBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    position: 'absolute',
    bottom: 50,
    right: 0,
    left: 0,
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconCall: {
    width: 26,
    height: 26,
  },
  border: {
    width: 50,
    height: 50,
    backgroundColor: '#797E8A',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxCall: {
    width: 70,
    height: 70,
    backgroundColor: '#EE574A',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VideoCall;
