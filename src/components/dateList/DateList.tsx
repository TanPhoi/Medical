import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

type DayItem = {
  key: string;
  dayOfWeek: string;
  month: string;
  day: number;
  isCurrentDay?: boolean;
};

type DateListProps = {
  onPress: (dayOfWeek: string, month: string, day: number) => void;
};

const DateList = React.memo(({onPress}: DateListProps): React.JSX.Element => {
  const [selectedDay, setSelectedDay] = useState<string | null>('');
  const getNext30Days = (): DayItem[] => {
    const date = new Date();
    const daysArray: DayItem[] = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(date);
      currentDate.setDate(date.getDate() + i);

      const dayOfWeek = currentDate.toLocaleDateString('en-US', {
        weekday: 'short',
      });
      const month = currentDate.toLocaleDateString('en-US', {month: 'short'});
      const day = currentDate.getDate();
      const isCurrentDay =
        currentDate.toDateString() === new Date().toDateString(); // Kiểm tra xem có phải ngày hiện tại không

      daysArray.push({
        key: `${dayOfWeek} ${month} ${day}`,
        dayOfWeek,
        month,
        day,
        isCurrentDay,
      });
    }

    return daysArray;
  };

  const handlePress = (dayOfWeek: string, month: string, day: number) => {
    setSelectedDay(`${dayOfWeek} ${month} ${day}`);
    onPress(dayOfWeek, month, day);
  };

  const renderItem = ({item}: {item: DayItem}) => (
    <TouchableOpacity
      onPress={() => handlePress(item.dayOfWeek, item.month, item.day)}
      style={[
        styles.dayContainer,
        selectedDay === item.key && styles.selectedDayContainer,
      ]}>
      <Text style={[styles.dayText]}>{item.dayOfWeek}</Text>
      <Text
        style={[
          styles.dayText,
          selectedDay === item.key && styles.selectedDayText,
        ]}>
        {item.month} {item.day}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={getNext30Days()}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal={true}
        contentContainerStyle={styles.daysContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  daysContainer: {
    alignItems: 'center',
  },
  dayContainer: {
    width: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#FAFAFA',
  },
  selectedDayContainer: {
    backgroundColor: '#D9DBE0',
  },
  dayText: {
    color: '#1A2C48',
    fontSize: 14,
    textAlign: 'center',
  },
  selectedDayText: {
    color: '#1A2C48',
    fontWeight: '800',
  },
});

export default DateList;
