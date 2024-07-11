import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../screens/welcome/Welcome';
import Home from '../screens/home/Home';
import AppointmentBooking from '../screens/appointmentBooking/AppointmentBooking';
import BookingConfirmed from '../screens/bookingConfirmed/BookingConfirmed';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MyMedications from '../screens/myMedications/MyMedications';
import MedicationDetail from '../screens/medicationDetail/MedicationDetail';
import {ImageSourcePropType} from 'react-native';
import AppointmentsCalendar from '../screens/appointmentsCalendar/AppointmentsCalendar';
const queryClient = new QueryClient();
export type RootStateParamsList = {
  Welcome: undefined;
  Home: undefined;
  AppointmentBooking: {
    id: string;
    image: any;
    title: string;
  };
  BookingConfirmed: undefined;
  MyMedications: undefined;
  MedicationDetail: {
    title: string;
    image: ImageSourcePropType;
  };
  AppointmentsCalendar: undefined;
};
const Stack = createNativeStackNavigator<RootStateParamsList>();
const AppNavigation = (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="AppointmentBooking"
            component={AppointmentBooking}
          />
          <Stack.Screen name="BookingConfirmed" component={BookingConfirmed} />
          <Stack.Screen name="MyMedications" component={MyMedications} />
          <Stack.Screen name="MedicationDetail" component={MedicationDetail} />
          <Stack.Screen
            name="AppointmentsCalendar"
            component={AppointmentsCalendar}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default AppNavigation;
