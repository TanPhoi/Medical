import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Text,
  ImageSourcePropType,
} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';

type SearchResultsProps = {
  navigation: NativeStackNavigationProp<RootStateParamsList, 'SearchResults'>;
};

const doctorList = [
  {
    id: 1,
    image: require('../../assets/image/img_doctor1.jpg'),
    name: 'Dr. Eva',
    desc: 'Dentist, dental hygiene',
    rate: 4.7,
    patients: '130+ patients',
    about:
      'Dr. Eva is a specialist doctor with many years of experience and extensive expertise in the healthcare field. Graduating from a top medical university, Dr. Eva is not only well-trained but also always updated with the latest knowledge and treatment methods to ensure the provision of high-quality medical services to patients.',
  },

  {
    id: 2,
    image: require('../../assets/image/img_doctor2.jpg'),
    name: 'Dr. Lucas',
    desc: 'Dentist, dental hygiene',
    rate: 4.7,
    patients: '130+ patients',
    about:
      'Dr. Lucas is a specialist doctor with many years of experience and extensive expertise in the healthcare field. Graduating from a top medical university, Dr. Eva is not only well-trained but also always updated with the latest knowledge and treatment methods to ensure the provision of high-quality medical services to patients.',
  },

  {
    id: 3,
    image: require('../../assets/image/img_doctor3.jpg'),
    name: 'Dr. Matthew',
    desc: 'Dentist hygiene',
    rate: 4.7,
    patients: '130+ patients',
    about:
      'Dr. Matthew is a specialist doctor with many years of experience and extensive expertise in the healthcare field. Graduating from a top medical university, Dr. Eva is not only well-trained but also always updated with the latest knowledge and treatment methods to ensure the provision of high-quality medical services to patients.',
  },

  {
    id: 4,
    image: require('../../assets/image/img_doctor4.jpg'),
    name: 'Dr. Matthew',
    desc: 'Dentist hygiene',
    rate: 4.7,
    patients: '130+ patients',
    about:
      'Dr. Matthew is a specialist doctor with many years of experience and extensive expertise in the healthcare field. Graduating from a top medical university, Dr. Eva is not only well-trained but also always updated with the latest knowledge and treatment methods to ensure the provision of high-quality medical services to patients.',
  },

  {
    id: 5,
    image: require('../../assets/image/img_doctor5.jpg'),
    name: 'Dr. Anna',
    desc: 'Dentist',
    rate: 4.7,
    patients: '130+ patients',
    about:
      'Dr. Anna is a specialist doctor with many years of experience and extensive expertise in the healthcare field. Graduating from a top medical university, Dr. Eva is not only well-trained but also always updated with the latest knowledge and treatment methods to ensure the provision of high-quality medical services to patients.',
  },
];

type Doctor = {
  id: number;
  image: ImageSourcePropType;
  name: string;
  desc: string;
  rate: number;
  patients: string;
  about: string;
};

const SearchResults = ({navigation}: SearchResultsProps): React.JSX.Element => {
  const textInputRef = useRef<TextInput>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctorList);

  useEffect(() => {
    const focusTimeout = setTimeout(() => {
      if (textInputRef.current) {
        textInputRef.current.focus();
      }
    }, 0);
    return () => clearTimeout(focusTimeout);
  }, []);

  useEffect(() => {
    const filtered = doctorList.filter(doctor =>
      doctor.name
        .toLocaleLowerCase()
        .replace(/\s+/g, '')
        .includes(searchText.replace(/\s+/g, '').toLocaleLowerCase()),
    );
    setFilteredDoctors(filtered);
  }, [searchText]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNextDoctorDetail = (
    image: ImageSourcePropType,
    name: string,
    desc: string,
    rate: number,
    patients: string,
    about: string,
  ) => {
    navigation.navigate('DoctorDetail', {
      image,
      name,
      desc,
      rate,
      patients,
      about,
    });
  };

  const RenderItem = (doctor: Doctor) => (
    <TouchableOpacity
      style={styles.boxItem}
      onPress={() =>
        handleNextDoctorDetail(
          doctor.image,
          doctor.name,
          doctor.desc,
          doctor.rate,
          doctor.patients,
          doctor.about,
        )
      }>
      <View style={styles.boxContent}>
        <Image style={styles.imgUser} source={doctor.image} />
        <View>
          <Text style={styles.txtName}>{doctor.name}</Text>
          <Text style={styles.txtDesc}>{doctor.desc}</Text>
        </View>
      </View>
      <Image
        style={styles.icon}
        source={require('../../assets/icon/ic_next.png')}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <TouchableOpacity onPress={handleBack}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/ic_back.png')}
          />
        </TouchableOpacity>

        <View style={styles.boxSearch}>
          <TextInput
            ref={textInputRef}
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search"
          />
          <Image
            style={styles.icon}
            source={require('../../assets/icon/ic_search.png')}
          />
        </View>

        <Image
          style={styles.iconUser}
          source={require('../../assets/icon/ic_user.jpg')}
        />
      </View>

      <FlatList
        data={filteredDoctors}
        renderItem={({item}) => <RenderItem {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  boxTop: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  iconUser: {
    width: 24,
    height: 24,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  boxItem: {
    marginTop: 20,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 10,
  },
  boxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  imgUser: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  txtName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A2C48',
  },
  txtDesc: {
    fontSize: 14,
    color: '#1A2C48',
  },
});

export default SearchResults;
