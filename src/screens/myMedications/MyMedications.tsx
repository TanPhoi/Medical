import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';
import TabBar from '../../components/tabBar/TabBar';
import ButtonMedications from '../../components/buttonMedications/ButtonMedications';
import Button from '../../components/button/Button';

const MedicationsData = [
  {
    title: 'Paracetamol',
    image: require('../../assets/icon/ic_paracethamol.png'),
  },
  {title: 'Vitamin C', image: require('../../assets/icon/ic_vitamin_c.png')},
  {title: 'Vitamin D', image: require('../../assets/icon/ic_vitamin_d.png')},
];

type MyMedicationsProps = {
  navigation: NativeStackNavigationProp<RootStateParamsList, 'MyMedications'>;
};

const MyMedications = ({navigation}: MyMedicationsProps): React.JSX.Element => {
  const handleUser = () => {};
  const handleOnClick = (title: string, image: ImageSourcePropType) => {
    navigation.navigate('MedicationDetail', {title, image});
  };

  const medicationRows = [];
  for (let i = 0; i < MedicationsData.length; i += 3) {
    medicationRows.push(MedicationsData.slice(i, i + 3));
  }

  const handleNext = () => {};

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TabBar title={'My medications'} onPress={handleBack} />

      <View style={styles.box}>
        {medicationRows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((medication, index) => (
              <ButtonMedications
                key={index}
                title={medication.title}
                image={medication.image}
                onPress={() =>
                  handleOnClick(medication.title, medication.image)
                }
              />
            ))}
          </View>
        ))}
      </View>
      <View style={styles.boxAdd}>
        <Image
          style={styles.icon}
          source={require('../../assets/icon/ic_add.png')}
        />
      </View>

      <View style={styles.boxButton}>
        <Button title={'Ask for prescription'} onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    width: '100%',
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    columnGap: 10,
  },
  boxAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    paddingVertical: 40,
    width: '32%',
    borderWidth: 0.4,
  },
  icon: {
    width: 10,
    height: 10,
  },
  boxButton: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    left: 20,
  },
});

export default MyMedications;
