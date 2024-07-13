import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {RootStateParamsList} from '../../routers/AppNavigation';
import Button from '../../components/button/Button';
import TabBar from '../../components/tabBar/TabBar';
import AppointmentsList from '../../components/appointmentsList/AppointmentsList';
import {useGetMedKitMutation} from '../../queries/medKitQueries';

type AppointmentsCalendarProps = {
  navigation: NativeStackNavigationProp<
    RootStateParamsList,
    'AppointmentsCalendar'
  >;
};
const AppointmentsCalendar = ({
  navigation,
}: AppointmentsCalendarProps): React.JSX.Element => {
  const useQuery = useGetMedKitMutation();
  const {isLoading} = useQuery;

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNextProfile = () => {
    navigation.navigate('PersonalProfile');
  };

  const handleNewAppointments = () => {};

  const handleNextVideoCal = (doctor: string, appointmentType: string) => {
    if (appointmentType === 'Chat') {
      navigation.navigate('Chat', {doctor});
    } else {
      navigation.navigate('VideoCall', {doctor, appointmentType});
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={styles.loadingContainer}
          size={'small'}
          color={'black'}
        />
      )}
      <TabBar
        title={'Your appointments'}
        onPress={handleBack}
        onPressUser={handleNextProfile}
      />

      <AppointmentsList isShow={true} onPress={handleNextVideoCal} />

      <Button title={'Book new appointment'} onPress={handleNewAppointments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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

export default AppointmentsCalendar;
