import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { fonts } from '../../../utils';
import {colors} from '../../../utils/colors';

const Buttons = ({status, isLittle, title, onPress}) => {
  const ButtonsMenu = () => {
    switch (status) {
      //button biru primary
      case 'primary':
        return (
          <TouchableOpacity onPress={onPress} style={styles.buttonPrimary}>
            <Text style={styles.textPrimary}>{title}</Text>
          </TouchableOpacity>
        );
      //button outer biru, bg putih
      case 'secondary':
        return (
          <TouchableOpacity onPress={onPress} style={styles.buttonSecondary}>
            <Text style={styles.textSecondary}> {title} </Text>
          </TouchableOpacity>
        );
      case 'tertiary':
        return (
          <TouchableOpacity
            onPress={onPress}
            style={styles.buttonTertiary(isLittle)}>
            <Text style={styles.textTertiary}> {title}</Text>
          </TouchableOpacity>
        );
      //button tulisan doang
      case 'quarternary': 
          return (
            <TouchableOpacity onPress={onPress} style={styles.buttonQuarternary}>
              <Text style={styles.textQuarternary}> {title} </Text>
            </TouchableOpacity>
          );  
      default:
        return (
          <TouchableOpacity onPress={onPress} style={styles.buttonPrimary}>
            <Text style={styles.textPrimary}> {title} </Text>
          </TouchableOpacity>
        );
    }
  };
  return (
    <View>
      <ButtonsMenu />
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: colors.button.primary.background,
    //marginHorizontal: 22, //ini buat apa
    borderRadius: 5,
    marginBottom: 24,
  },
  textPrimary: {
    color: colors.button.primary.text,
    textAlign: 'center',
    fontFamily: fonts.primary.bold, //boldnya ga keganti
    fontSize: 16,
    paddingVertical: 15,
  },
  buttonSecondary: {
    backgroundColor: colors.button.secondaryOutline.background,
    borderColor: colors.button.secondaryOutline.blue,
    borderWidth: 1,
    //marginHorizontal: 0,
    borderRadius: 5,
  },
  textSecondary: {
    color: colors.button.secondaryOutline.blue,
    textAlign: 'center',
    fontFamily: 'Segoe-UI',
    fontSize: 16,
    paddingVertical: 15,
  },
  buttonTertiary: isLittle => ({
    backgroundColor: colors.button.primaryOutline.background,
    borderColor: colors.button.primaryOutline.outline,
    borderWidth: 1,
    marginHorizontal: isLittle ? '37%' : 0,
    borderRadius: 5,
    marginBottom: 24,
  }),
  textTertiary: {
    color: colors.button.primaryOutline.text,
    textAlign: 'center',
    fontFamily: fonts.primary.bold, //boldnya ga keganti
    fontSize: 16,
    paddingVertical: 15,
  },
  buttonQuarternary: {
    backgroundColor: 'white',
    borderColor: colors.button.secondaryOutline.background,
    //borderWidth: 1,
    //marginHorizontal: 0,
    borderRadius: 5,
  },
  textQuarternary: {
    color: colors.button.secondaryOutline.blue,
    textAlign: 'center',
    fontFamily: fonts.primary.semibold,
    fontSize: 14,
    //paddingVertical: 15,
  },
});
