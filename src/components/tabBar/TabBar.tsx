import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

type TabBarProps = {
  title: string;
  onPress: () => void;
  onPressUser: () => void;
};
const TabBar = ({
  title,
  onPress,
  onPressUser,
}: TabBarProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={styles.icon}
            source={require('../../assets/icon/ic_back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.txt}>{title}</Text>
      </View>

      <TouchableOpacity onPress={onPressUser}>
        <Image
          style={styles.icon}
          source={require('../../assets/icon/ic_user.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 50,
  },
  txt: {
    color: '#1A2C48',
    fontSize: 16,
    fontWeight: '600',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
});

export default TabBar;
