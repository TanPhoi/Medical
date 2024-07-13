import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

type InputTextProps = {
  label: string;
  content: string;
};
const InputText = ({label, content}: InputTextProps): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtLabel}>{label}</Text>
      <Text style={styles.txtContent}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    rowGap: 10,
    marginTop: 20,
  },
  txtLabel: {
    fontSize: 12,
  },
  txtContent: {
    fontSize: 16,
    color: '#1A2C48',
    borderBottomWidth: 0.2,
    paddingBottom: 8,
  },
});

export default InputText;
