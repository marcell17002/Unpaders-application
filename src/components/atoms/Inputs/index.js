import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Inputs = ({title, value, edit, placeholder, onChangeText, secure}) => {
  return (
    <View style={styles.input}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        value={value}
        style={styles.inputText}
        secureTextEntry={secure}
        editable={edit}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.input.secondary,
    //marginTop: 12,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginBottom: 12,
  },
  inputText: {
    fontSize: 13,
    fontFamily: fonts.primary.reguler,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    borderColor: colors.input.outline,
    color: colors.text.tertiary,
    backgroundColor: colors.input.background,
  },
});
