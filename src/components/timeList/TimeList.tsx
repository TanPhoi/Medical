import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

type HourItem = {
  key: string;
  hour: string;
  isCurrentHour?: boolean;
};

type TimeListProps = {
  onPress: (hour: string) => void;
};

const TimeList = React.memo(({onPress}: TimeListProps): React.JSX.Element => {
  const [selectedTime, setSelectedTime] = useState<string | null>('');

  const getCurrentHour = (): number => {
    const date = new Date();
    return date.getHours();
  };

  const handlePress = (hour: string) => {
    setSelectedTime(`${hour}:00`);
    onPress(hour);
  };

  const generateHours = (): HourItem[] => {
    const hoursArray: HourItem[] = [];
    for (let hour = 9; hour <= 16; hour++) {
      const formattedHour = `${hour}:00`;
      const isCurrentHour = hour === getCurrentHour();
      hoursArray.push({key: formattedHour, hour: formattedHour, isCurrentHour});
    }
    return hoursArray;
  };

  const renderItem = ({item}: {item: HourItem}) => (
    <TouchableOpacity
      onPress={() => handlePress(item.hour)}
      style={[
        styles.hourContainer,
        selectedTime === `${item.key}:00` && styles.selectedTimeContainer,
      ]}>
      <Text
        style={[
          styles.hourText,
          selectedTime === `${item.key}:00` && styles.selectedTimeText,
        ]}>
        {item.hour}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={generateHours()}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      numColumns={4}
      contentContainerStyle={styles.hoursContainer}
    />
  );
});

const styles = StyleSheet.create({
  hoursContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  hourContainer: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
  },
  currentHourContainer: {
    backgroundColor: '#D9DBE0',
  },
  hourText: {
    fontSize: 16,
    color: '#1A2C48',
    textAlign: 'center',
  },
  selectedTimeContainer: {
    backgroundColor: '#D9DBE0',
  },
  timeText: {
    color: '#1A2C48',
    fontSize: 14,
    textAlign: 'center',
  },
  selectedTimeText: {
    color: '#1A2C48',
    fontWeight: '800',
  },
});

export default TimeList;
