import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Buttons } from '../../atoms';

const InputChat = ({value, onChangeText, onPress, placeholder}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}></TextInput>
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
    paddingVertical: 5,
  },
  page: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 5.7,
    shadowRadius: 0,
    elevation: 10,
    paddingVertical: 2,
  },
  input: {
    color: "#000",
    backgroundColor: colors.backgroundgrey,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    marginRight: 12,
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
  },
});
