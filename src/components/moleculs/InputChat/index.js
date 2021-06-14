import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Buttons } from '../../atoms';

const InputChat = ({value, onChangeText, onPress}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder="Tulis pesan..."></TextInput>
        <Buttons
          onPress={onPress}
          status="button-icon"
          disable={value.length < 1}
        />
        {/* disable bernilai true, kl false disable={false} */}
      </View>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 20,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  page: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 5.7,
    shadowRadius: 0,
    elevation: 10,
  },
  input: {
    backgroundColor: colors.backgroundgrey,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 12,
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
  },
});
