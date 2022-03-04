import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({placeholderText}) => {
  return <TextInput style={styles.InputStyle} placeholder={placeholderText} />;
};

const styles = StyleSheet.create({
  InputStyle: {
    borderWidth: 1,
    width: '80%',
    height: 70,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    fontSize: 20,
  },
});

export default CustomInput;
