import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

type ButtonMedicationsProps = {
  title: string;
  image: any;
  onPress: () => void;
};
const ButtonMedications = ({
  title,
  image,
  onPress,
}: ButtonMedicationsProps): React.JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.icon} source={image} />
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 16,
    borderRadius: 14,
    paddingVertical: 20,
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
  },
  txt: {
    fontSize: 12,
  },
});

export default ButtonMedications;
