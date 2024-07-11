import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

type LeftRightTextProps = {
  textLeft: string;
  onPress: () => void;
};
const LeftRightText = ({
  textLeft,
  onPress,
}: LeftRightTextProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtLeft}>{textLeft}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.txtRight}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtLeft: {
    color: '#1A2C48',
    fontSize: 18,
    fontWeight: '600',
  },
  txtRight: {
    color: '',
    fontSize: 14,
  },
});

export default LeftRightText;
