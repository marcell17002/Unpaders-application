import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Icon } from 'native-base';

const InputPassword = ({
  title,
  value,
  isNumeric,
  edit,
  placeholder,
  onChangeText,
  secure,
  multiline,
  numberOfLines,
  iconEye,
}) => {
  return (
    <>
    <Text style={styles.titleText}>{title}</Text>
    <View style={styles.contButton}>
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
            placeholderTextColor="#787878"
        />
        <Icon style={styles.iconStyle}>{iconEye}</Icon>
    </View>
    </>
  );
};

export default InputPassword;

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
  contButton: {
    flexDirection: 'row',
    color: "#000",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    borderColor: colors.input.outline,
    backgroundColor: colors.input.background,
    //paddingVertical: 10,
    
  },
  inputText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    textAlignVertical: 'center',
    //backgroundColor: 'yellow',
  },
  iconStyle: {
    marginTop: 8,
    justifyContent: 'center',
    height: 10,

  },
});
