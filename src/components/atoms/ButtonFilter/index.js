import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ButtonFilter = ({title, onPress, active}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress} style={styles.button(active)}
      underlayColor= {colors.primary} Text={colors.primaryWhite}
      activeOpacity={0.6}
      >
        <Text style={styles.textButton(active)}>{title}</Text>
      </TouchableHighlight>
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
    //width: 168,
    marginHorizontal: 8,
    flex: 1,
  }),
  textButton: active => ({
    color: active ? colors.button.primary.text : colors.button.dropdown.text,
    textAlign: 'center',
    fontFamily: fonts.primary.reguler,
    fontSize: 12,
    paddingVertical: 10,
  }),
});
