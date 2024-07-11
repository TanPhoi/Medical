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
import {useGetMedKitMutation} from '../../queries/medKitQueries';

type AppointmentsListProps = {
  isShow: boolean;
};

type Appointments = {
  field: string;
  doctor: string;
  appointmentType: string;
  date: string;
  image: any;
};

const AppointmentsList = ({
  isShow,
}: AppointmentsListProps): React.JSX.Element => {
  const useQuery = useGetMedKitMutation();
  const {isLoading, data} = useQuery;

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const RenderItem = ({
    field,
    doctor,
    appointmentType,
    date,
    image,
  }: Appointments) => (
    <TouchableOpacity style={styles.boxItem}>
      <View style={styles.boxTop}>
        <View style={styles.boxLeft}>
          <Image style={styles.icon} source={image} />
          <Text style={styles.txt}>{`${capitalizeFirstLetter(
            field,
          )} check-up`}</Text>
        </View>
        <View style={styles.boxDate}>
          <Text style={styles.txt}>{date}</Text>
        </View>
      </View>

      {isShow && (
        <View style={styles.boxBottom}>
          <Text>{capitalizeFirstLetter(doctor)}</Text>
          <View style={styles.boxType}>
            {appointmentType === 'Chat' ? (
              <Image
                style={styles.iconType}
                source={require('../../assets/icon/ic_chat.png')}
              />
            ) : (
              <Image
                style={styles.iconType}
                source={require('../../assets/icon/ic_video.png')}
              />
            )}

            <Text>{`${appointmentType} appointment`}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );

  const filteredData = isShow ? data : data?.slice(0, 2);
  return (
    <FlatList
      data={filteredData || []}
      renderItem={({item}) => <RenderItem {...item} />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  boxItem: {
    backgroundColor: '#FAFAFA',
    marginRight: 10,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  txt: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  boxTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  boxDate: {
    width: '20%',
    backgroundColor: '#B2C9FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 6,
  },
  boxBottom: {
    rowGap: 10,
    marginLeft: '12%',
  },
  iconType: {
    width: 12,
    height: 12,
  },
  boxType: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
});

export default AppointmentsList;
