import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import React from 'react';

const CountryCodNum = ({onclick}) => {
  return (
    <TouchableOpacity style={styles.CountryCod} onPress={onclick}>
      <Text>+994</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  CountryCod: {
    position: 'absolute',
    left: 60,
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
});

export default CountryCodNum;
