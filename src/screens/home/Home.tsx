import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';
import LeftRightText from '../../components/leftRightText/LeftRightText';
import MedKitList from '../../components/medKitList/MedkitList';
import AppointmentsList from '../../components/appointmentsList/AppointmentsList';
import {useGetMedKitMutation} from '../../queries/medKitQueries';

const CurrentMedicationsList = [
  {
    id: '1',
    image: require('../../assets/icon/ic_paracethamol.png'),
    title: 'Paracethamol',
  },
  {
    id: '2',
    image: require('../../assets/icon/ic_vitamin_c.png'),
    title: 'Vitamin C',
  },
  {
    id: '3',
    image: require('../../assets/icon/ic_vitamin_d.png'),
    title: 'Vitamin D',
  },
];

const FindYourDoctorList = [
  {
    id: '1',
    image: require('../../assets/icon/ic_general.png'),
    title: 'General',
  },
  {
    id: '2',
    image: require('../../assets/icon/ic_dentist.png'),
    title: 'Dentist',
  },
  {
    id: '3',
    image: require('../../assets/icon/ic_geneticist.png'),
    title: 'Geneticist',
  },
  {
    id: '4',
    image: require('../../assets/icon/ic_nurse.png'),
    title: 'Nurse',
  },
  {
    id: '5',
    image: require('../../assets/icon/ic_virologist.png'),
    title: 'Virologist',
  },
  {
    id: '6',
    image: require('../../assets/icon/ic_cardiologist.png'),
    title: 'Cardiologist',
  },
];

type HomeProps = {
  navigation: NativeStackNavigationProp<RootStateParamsList, 'Home'>;
};

const Home = ({navigation}: HomeProps): React.JSX.Element => {
  const useQuery = useGetMedKitMutation();
  const {isLoading} = useQuery;

  const handleUpcomingAppointments = () => {
    navigation.navigate('AppointmentsCalendar');
  };

  const handleCurrentMedications = () => {
    navigation.navigate('MyMedications');
  };

  const handleFindYourDoctor = () => {};

  const handleSearchText = () => {
    navigation.navigate('SearchResults');
  };

  const handleItemMedications = (id: string, image: any, title: string) => {
    navigation.navigate('MedicationDetail', {image, title});
  };

  const handleItemDoctor = (id: string, image: any, title: string) => {
    navigation.navigate('AppointmentBooking', {id, image, title});
  };

  const handleNextProfile = () => {
    navigation.navigate('PersonalProfile');
  };

  const handleOnItem = () => {
    return;
  };

  const renderItem = ({item}: {item: any}) => {
    if (item.type === 'header') {
      return (
        <View style={styles.boxTabBar}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/ic_menu.png')}
          />
          <View style={styles.boxTxt}>
            <Text style={[styles.txtMed, {fontFamily: 'Hanuman-Bold'}]}>
              Med
            </Text>
            <Text style={styles.txtKit}>Kit</Text>
          </View>
          <TouchableOpacity onPress={handleNextProfile}>
            <Image
              style={styles.iconUser}
              source={require('../../assets/icon/ic_user.jpg')}
            />
          </TouchableOpacity>
        </View>
      );
    }
    if (item.type === 'search') {
      return (
        <TouchableOpacity style={styles.boxSearch} onPress={handleSearchText}>
          <Text style={styles.input}>Search doctors, appointments,...</Text>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/ic_search.png')}
          />
        </TouchableOpacity>
      );
    }
    if (item.type === 'upcoming') {
      return (
        <>
          <LeftRightText
            textLeft="Upcoming appointments"
            onPress={handleUpcomingAppointments}
          />

          <View style={styles.appointmentsListWrapper}>
            <AppointmentsList isShow={false} onPress={handleOnItem} />
          </View>
        </>
      );
    }
    if (item.type === 'current') {
      return (
        <>
          <LeftRightText
            textLeft="Current medications"
            onPress={handleCurrentMedications}
          />
          <MedKitList
            array={CurrentMedicationsList}
            onPress={handleItemMedications}
          />
        </>
      );
    }
    if (item.type === 'find') {
      return (
        <>
          <LeftRightText
            textLeft="Find your doctor"
            onPress={handleFindYourDoctor}
          />
          <MedKitList array={FindYourDoctorList} onPress={handleItemDoctor} />
        </>
      );
    }
    return null;
  };

  const data = [
    {type: 'header'},
    {type: 'search'},
    {type: 'upcoming'},
    {type: 'current'},
    {type: 'find'},
  ];

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          style={styles.loadingContainer}
          size={'small'}
          color={'black'}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#F4F4F4',
  },
  boxSearch: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 12,
    paddingHorizontal: 6,
  },
  input: {
    flex: 1,
    padding: 14,
  },
  iconContainer: {
    padding: 4,
  },
  iconUser: {
    width: 24,
    height: 24,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  boxTabBar: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxTxt: {
    flexDirection: 'row',
  },
  txtMed: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
  },
  txtKit: {
    fontSize: 18,
    color: 'black',
    fontWeight: '300',
  },
  appointmentsListWrapper: {
    marginTop: 20,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
  },
});

export default Home;
