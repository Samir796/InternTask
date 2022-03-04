import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonContinue from '../components/ButtonContinue';
import CustomNumberInput from '../components/NumberInput';
import CountryCodNum from '../components/CountryCod';
import ModalScreen from '../components/Modal';
import {useSelector, useDispatch} from 'react-redux';
import {getCountry} from '../redux/action';
import {FlatList} from 'react-native-gesture-handler';

const PhoneNumberScreen = route => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  const {country} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <CustomNumberInput placeholderText="Phone Number" />
          <CountryCodNum onclick={handleModal} />
        </View>

        <ModalScreen
          visible={isModalVisible}
          onclick={handleModal}
          Data={country}
          RenderItem={({item}) => (
            <View>
              <Text>{item.country}</Text>
            </View>
          )}
        />
        <View style={styles.containerBtn}>
          <ButtonContinue text="Continue" />
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

export default PhoneNumberScreen;
