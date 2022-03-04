import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ButtonContinue = ({text, onclick}) => {
  return (
    <TouchableOpacity style={styles.BtnStyle} onPress={onclick}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  BtnStyle: {
    width: '80%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
});

export default ButtonContinue;
