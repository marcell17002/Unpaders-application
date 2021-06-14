import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const ButtonFilter = ({title, onPress, active}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={!active ? styles.button: styles.activeButton}>
        <Text style={!active ? styles.textButton : styles.activeTextButton}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.button.dropdown.passive,
    borderRadius: 5,
    marginBottom: 16,
    justifyContent: 'flex-start',
    width: 168,
  },
  activeButton: {
    backgroundColor: colors.button.primary.background,
    borderRadius: 5,
    marginBottom: 16,
    justifyContent: 'flex-start',
    width: 168,
  },
  textButton: {
    color: colors.button.dropdown.text,
    textAlign: 'center',
    fontFamily: fonts.primary.semibold,
    fontSize: 14,
    paddingVertical: 10,
  },
  activeTextButton: {
    color: colors.button.primary.text,
    textAlign: 'center',
    fontFamily: fonts.primary.semibold,
    fontSize: 14,
    paddingVertical: 10,
  }
});
