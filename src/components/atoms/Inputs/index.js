import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { colors, fonts } from '../../../utils';

const Inputs = ({
  title,
  value,
  isNumeric,
  edit,
  placeholder,
  onChangeText,
  secure,
  multiline,
  numberOfLines,
}) => {
  return (
    <>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        value={value}
        style={styles.inputText}
        secureTextEntry={secure}
        keyboardType={isNumeric ? 'numeric' : 'default'}
        editable={edit}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </>
  );
};

export default Inputs;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.input.secondary,
  },
  titleText: {
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: "#000",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    borderColor: colors.input.outline,
    backgroundColor: colors.input.background,
    textAlignVertical: 'top',
    paddingVertical: 10,
  },
});
