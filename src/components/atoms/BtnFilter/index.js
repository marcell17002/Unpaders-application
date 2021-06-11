import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const BtnFilter = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BtnFilter;

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
  textButton: {
    color: colors.button.dropdown.text,
    textAlign: 'center',
    fontFamily: fonts.primary.semibold,
    fontSize: 14,
    paddingVertical: 10,
  },
});
