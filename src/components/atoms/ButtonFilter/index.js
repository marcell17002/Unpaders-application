import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ButtonFilter = ({title, onPress, active}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button(active)}>
        <Text style={styles.textButton(active)}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: active => ({
    backgroundColor: active
      ? colors.button.primary.background
      : colors.button.dropdown.passive,
    borderRadius: 5,
    marginBottom: 16,
    justifyContent: 'flex-start',
    width: 168,
  }),
  textButton: active => ({
    color: active ? colors.button.primary.text : colors.button.dropdown.text,
    textAlign: 'center',
    fontFamily: fonts.primary.semibold,
    fontSize: 14,
    paddingVertical: 10,
  }),
});
