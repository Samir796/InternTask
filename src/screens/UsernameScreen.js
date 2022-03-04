import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import ButtonContinue from '../components/ButtonContinue';
import CustomInput from '../components/Input';

const NameEmailScreen = ({navigation}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <CustomInput placeholderText="Username" />
          <CustomInput placeholderText="Email" />
        </View>
        <View style={styles.containerBtn}>
          <ButtonContinue
            text="Continue"
            onclick={() => {
              navigation.navigate('PhoneScreen');
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
});

export default NameEmailScreen;
