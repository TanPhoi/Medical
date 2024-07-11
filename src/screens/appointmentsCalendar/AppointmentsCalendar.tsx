import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';
import Button from '../../components/button/Button';
import TabBar from '../../components/tabBar/TabBar';
import AppointmentsList from '../../components/appointmentsList/AppointmentsList';

type AppointmentsCalendarProps = {
  navigation: NativeStackNavigationProp<
    RootStateParamsList,
    'AppointmentsCalendar'
  >;
};
const AppointmentsCalendar = ({
  navigation,
}: AppointmentsCalendarProps): React.JSX.Element => {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleNewAppointments = () => {};

  return (
    <View style={styles.container}>
      <TabBar title={'Your appointments'} onPress={handleBack} />

      <AppointmentsList isShow={true} />

      <Button title={'Book new appointment'} onPress={handleNewAppointments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AppointmentsCalendar;
