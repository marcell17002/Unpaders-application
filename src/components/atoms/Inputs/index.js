import React from 'react';
import {StyleSheet, TextInput, Text, View, YellowBox} from 'react-native';
import {colors, fonts} from '../../../utils';

const Inputs = ({
  title,
  value,
  isNumeric,
  edit,
  placeholder,
  onChangeText,
  secure,
  multiline,
  type,
  numberLines,
}) => {
  const TypeInput  = () => {
    switch (type) {
      case 'multiline' :
        return (
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <TextInput
              multiline={true}
              numberOfLines={numberLines}
              value={value}
              style={styles.inputTextMulti}
              secureTextEntry={secure}
              keyboardType={isNumeric ? 'numeric' : 'default'}
              editable={edit}
              onChangeText={onChangeText}
              placeholder={placeholder}
            />
          </View>
        );
        case 'addPhoto' :
        return (
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <TextInput
              multiline={true}
              numberOfLines={numberLines}
              value={value}
              style={styles.inputTextPhoto}
              secureTextEntry={secure}
              keyboardType={isNumeric ? 'numeric' : 'default'}
              editable={edit}
              onChangeText={onChangeText}
              placeholder={placeholder}
            />
          </View>
        );
      default: 
        return (
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <TextInput
              isMultiline={ multiline ? 'true' : 'false'}
              // ={isMultiline ? 'true' : 'false'}
              value={value}
              style={styles.inputText}
              secureTextEntry={secure}
              keyboardType={isNumeric ? 'numeric' : 'default'}
              editable={edit}
              onChangeText={onChangeText}
              placeholder={placeholder}
            />
          </View>
      ); 
    }
  };
  return (
    <View>
      <TypeInput />
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
  inputTextMulti: {
    fontSize: 13,
    fontFamily: fonts.primary.reguler,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    borderColor: colors.input.outline,
    color: colors.text.tertiary,
    backgroundColor: colors.input.background,
    textAlignVertical: "top",
  },
  inputTextPhoto: {
    fontSize: 13,
    fontFamily: fonts.primary.reguler,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    borderColor: colors.input.outline,
    color: colors.text.tertiary,
    backgroundColor: colors.input.background,
    //textAlignVertical: "top",
  }
});
