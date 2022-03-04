import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const ModalScreen = ({visible, onclick, Data, RenderItem}) => {
  return (
    <Modal isVisible={visible}>
      <View style={styles.modalContainer}>
        <FlatList data={Data} renderItem={RenderItem} />
        <TouchableOpacity style={styles.modal} onPress={onclick}>
          <Text style={styles.text}>Hide</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: 'lightgreen',
  },
  text: {
    color: 'white',
  },
});

export default ModalScreen;
