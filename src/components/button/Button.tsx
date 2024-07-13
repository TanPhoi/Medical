import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button = ({title, onPress}: ButtonProps): React.JSX.Element => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.textStart}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 14,
    padding: 14,
    width: '100%',
    backgroundColor: '#1A2C48',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 6,
    marginTop: 40,
  },
  textStart: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Button;
