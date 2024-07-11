import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Dropdown} from 'react-native-element-dropdown';
import TabBar from '../../components/tabBar/TabBar';
import {RootStateParamsList} from '../../routers/AppNavigation';
import DateList from '../../components/dateList/DateList';
import TimeList from '../../components/timeList/TimeList';
import {RouteProp} from '@react-navigation/native';
import Button from '../../components/button/Button';
import {useInsertMedKitMutation} from '../../queries/medKitQueries';

const FieldList = [
  {label: 'General', value: 'general'},
  {label: 'Dentist', value: 'dentist'},
  {label: 'Geneticist', value: 'geneticist'},
  {label: 'Nurse', value: 'nurse'},
  {label: 'Virologist', value: 'virologist'},
  {label: 'Cardiologist', value: 'cardiologist'},
];

const DoctorList = [
  {label: 'Dr.Lucas', value: 'dr.lucas'},
  {label: 'Dr.Matthew', value: 'dr.matthew'},
  {label: 'Dr.Greg', value: 'dr.greg'},
  {label: 'Dr.Eva', value: 'dr.eva'},
  {label: 'Dr.Anna', value: 'dr.anna'},
];

type AppointmentBookingProps = {
  navigation: NativeStackNavigationProp<
    RootStateParamsList,
    'AppointmentBooking'
  >;
  route: RouteProp<RootStateParamsList, 'AppointmentBooking'>;
};

const AppointmentBooking = ({
  navigation,
  route,
}: AppointmentBookingProps): React.JSX.Element => {
  const insertMedKitMutation = useInsertMedKitMutation();
  const {id, image, title} = route.params;
  const [field, setValueField] = useState<string>('');
  const [doctor, setValueDoctor] = useState<string>('Dr.Lucas');
  const [appointmentType, setSelectedAppointment] = useState<string>('');
  const [date, setValueDate] = useState<string>('');
  const [time, setValueTime] = useState<string>('');

  useEffect(() => {
    setValueField(title);
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSelectedDate = (
    dayOfWeek: string,
    month: string,
    day: number,
  ) => {
    setValueDate(`${month} ${day}`);
  };

  const handleSelectedTime = (hour: string) => {
    setValueTime(hour);
  };

  const handleBookNow = () => {
    if (!field || !doctor || !appointmentType || !date || !time) {
      return;
    }
    insertMedKitMutation.mutate({
      field,
      doctor,
      appointmentType,
      date,
      time,
      image,
    });
    navigation.navigate('BookingConfirmed');
  };

  return (
    <View style={styles.container}>
      <TabBar title={'Book your appointment'} onPress={handleBack} />

      <FlatList
        data={['Appointment type', 'Select date', 'Select time']}
        renderItem={({item}) => (
          <>
            {item === 'Appointment type' && (
              <View>
                <Text style={styles.txt}>{item}</Text>
                <View style={styles.box}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      appointmentType === 'Chat' && styles.selectedButton,
                    ]}
                    onPress={() => setSelectedAppointment('Chat')}>
                    <Text
                      style={[
                        styles.txtButton,
                        appointmentType === 'Chat' && styles.selectedButtonTxt,
                      ]}>
                      Chat
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.button,
                      appointmentType === 'Video' && styles.selectedButton,
                    ]}
                    onPress={() => setSelectedAppointment('Video')}>
                    <Text
                      style={[
                        styles.txtButton,
                        appointmentType === 'Video' && styles.selectedButtonTxt,
                      ]}>
                      Video
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {item === 'Select date' && (
              <>
                <Text style={styles.txt}>{item}</Text>
                <DateList onPress={handleSelectedDate} />
              </>
            )}

            {item === 'Select time' && (
              <>
                <Text style={styles.txt}>{item}</Text>
                <TimeList onPress={handleSelectedTime} />
                <Button title={'Book now'} onPress={handleBookNow} />
              </>
            )}
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View style={styles.boxOption}>
            <Text>Field</Text>
            <Dropdown
              style={styles.dropdown}
              data={FieldList}
              labelField="label"
              valueField="value"
              placeholder={field}
              value={field}
              onChange={item => {
                setValueField(item.value);
              }}
            />

            <Text>Doctor</Text>
            <Dropdown
              style={styles.dropdown}
              data={DoctorList}
              labelField="label"
              valueField="value"
              placeholder={doctor}
              value={doctor}
              onChange={item => {
                setValueDoctor(item.value);
              }}
            />
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  boxOption: {
    marginTop: 30,
    marginBottom: 20,
  },
  dropdown: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FAFAFA',
  },
  txt: {
    marginTop: 20,
    fontSize: 14,
  },
  box: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
    columnGap: 10,
  },
  button: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  txtButton: {
    fontSize: 16,
  },
  selectedButton: {
    backgroundColor: '#D9DBE0',
  },
  selectedButtonTxt: {
    color: '#1A2C48',
    fontWeight: '800',
  },
});

export default AppointmentBooking;
