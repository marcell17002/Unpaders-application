import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {colors} from '../../../utils';

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
    marginVertical: 12,
  },
  titleText: {
    fontSize: 14,
    fontFamily: 'Segoe-UI-SemiBold',
    color: colors.input.text,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 12,
    fontFamily: 'Segoe-UI',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    borderColor: colors.input.outline,
    color: colors.input.text,
    backgroundColor: colors.input.background,
  },
});
