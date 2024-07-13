import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';
import {RouteProp} from '@react-navigation/native';

type ChatProps = {
  navigation: NativeStackNavigationProp<RootStateParamsList, 'Chat'>;
  route: RouteProp<RootStateParamsList, 'Chat'>;
};

const Chat = ({navigation, route}: ChatProps): React.JSX.Element => {
  const {doctor} = route.params;

  useEffect(() => {
    StatusBar.setHidden(true);
    return () => {
      StatusBar.setHidden(false);
    };
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <View style={styles.boxName}>
          <TouchableOpacity onPress={handleBack}>
            <Image
              style={styles.icon}
              source={require('../../assets/icon/ic_back.png')}
            />
          </TouchableOpacity>

          <Image
            style={styles.imgDoctor}
            source={require('../../assets/image/img_doctor2.jpg')}
          />
          <View>
            <Text style={styles.txtDoctor}>{doctor}</Text>
            <Text style={styles.txtOnline}>Online now</Text>
          </View>
        </View>

        <View style={styles.boxCall}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/ic_call.png')}
          />
          <Image
            style={styles.icon}
            source={require('../../assets/icon/ic_video.png')}
          />
        </View>
      </View>

      <View style={styles.boxChat}>
        <Text style={styles.txtTimeTop}>Today 11:00</Text>

        <View style={styles.viewChatDoctor}>
          <Text style={styles.txtChat}>How`s the diet?</Text>
          <Text style={styles.txtTime}>11:00</Text>
        </View>

        <View style={styles.viewChatUser}>
          <Text style={styles.txtChat}>I feel better now.</Text>
          <Text style={styles.txtTime}>11:01</Text>
        </View>
      </View>

      <View style={styles.boxBottom}>
        <TextInput style={styles.boxInput} placeholder="Type something..." />
        <Image
          style={styles.icon}
          source={require('../../assets/icon/ic_send.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},

  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  imgDoctor: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  txtDoctor: {
    color: '#1A2C48',
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtOnline: {
    color: '',
    fontSize: 12,
  },
  boxTop: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxName: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  boxCall: {
    flexDirection: 'row',
    columnGap: 20,
    alignItems: 'center',
  },

  boxChat: {
    flex: 1,
  },
  txtChat: {
    fontSize: 14,
    color: '#1A2C48',
  },
  txtTimeTop: {
    marginTop: 20,
    fontSize: 12,
    color: '#1A2C48',
    textAlign: 'center',
  },
  txtTime: {
    fontSize: 12,
    color: '#1A2C48',
  },
  viewChatDoctor: {
    marginTop: 40,
    backgroundColor: '#DEE8FF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    maxWidth: '80%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    columnGap: 20,
  },
  viewChatUser: {
    backgroundColor: '#D9DBE0',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    maxWidth: '100%',
    alignSelf: 'flex-end',
    alignItems: 'center',
    columnGap: 20,
  },
  boxBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  boxInput: {
    maxWidth: '90%',
  },
});

export default Chat;
