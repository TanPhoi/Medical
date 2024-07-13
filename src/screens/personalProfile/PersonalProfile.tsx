import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';
import Button from '../../components/button/Button';
import InputText from '../../components/inputText/InputText';

type PersonalProfileProps = {
  navigation: NativeStackNavigationProp<RootStateParamsList, 'PersonalProfile'>;
};
const PersonalProfile = ({
  navigation,
}: PersonalProfileProps): React.JSX.Element => {
  const DataTextList = [
    {
      label: 'Blood type',
      content: '0+',
    },
    {
      label: 'Weight',
      content: '78kg',
    },
    {
      label: 'Height',
      content: '182 cm',
    },
    {
      label: 'Allergies',
      content: 'Shellfish, fruit',
    },
  ];

  const handleEditProfile = () => {};

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <TouchableOpacity onPress={handleBack} style={styles.icon}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/ic_back.png')}
          />
        </TouchableOpacity>

        <View style={styles.container}>
          <Image
            style={styles.imgUser}
            source={require('../../assets/icon/ic_user.jpg')}
          />
          <Text style={styles.txtName}>Jacob Jacobs</Text>
          <View style={styles.boxHorizontal}>
            <View style={styles.box}>
              <Text style={styles.txt}>47 years old</Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.txt}>Male</Text>
            </View>
          </View>

          {DataTextList.map((input, index) => (
            <InputText
              key={index}
              label={input.label}
              content={input.content}
            />
          ))}
        </View>
        <Text style={styles.txtContact}>Emergency contact</Text>

        <View style={styles.boxHorizontal}>
          <View style={styles.boxContact}>
            <View style={styles.boxNumber}>
              <Text style={styles.txt}>1</Text>
            </View>
            <Text style={styles.txt}>Mother</Text>
          </View>

          <View style={styles.boxContact}>
            <View style={styles.boxNumber}>
              <Text style={styles.txt}>2</Text>
            </View>
            <Text style={styles.txt}>Friend</Text>
          </View>
        </View>

        <Button title={'Edit details'} onPress={handleEditProfile} />
      </View>
    </ScrollView>
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
    resizeMode: 'contain',
    borderRadius: 30,
  },
  txtName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A2C48',
  },
  boxHorizontal: {
    marginTop: 10,
    flexDirection: 'row',
    columnGap: 10,
  },

  box: {
    backgroundColor: '#FAFAFA',
    padding: 14,
    borderRadius: 20,
  },
  txt: {
    fontSize: 14,
    color: '#1A2C48',
    fontWeight: 'bold',
  },
  txtContact: {
    marginTop: 28,
    fontSize: 16,
    color: '#1A2C48',
    fontWeight: 'bold',
  },

  boxContact: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
    borderRadius: 10,
  },
  boxNumber: {
    backgroundColor: '#D9DBE0',
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PersonalProfile;
