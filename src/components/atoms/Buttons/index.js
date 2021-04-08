import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';

const Buttons = ({status, isLittle, title, onPress}) => {
  const ButtonsMenu = () => {
    switch (status) {
      case 'primary':
        return (
          <TouchableOpacity onPress={onPress} style={styles.buttonPrimary}>
            <Text style={styles.textPrimary}>{title}</Text>
          </TouchableOpacity>
        );
      case 'secondary':
        return (
          <TouchableOpacity onPress={onPress} style={styles.buttonSecondary}>
            <Text style={styles.textSecondary}> {titke} </Text>
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
    marginHorizontal: 22,
    borderRadius: 5,
  },
  textPrimary: {
    color: colors.button.primary.text,
    textAlign: 'center',
    fontFamily: 'Segoe-UI-SemiBold',
    fontSize: 14,
    paddingVertical: 15,
  },
  buttonSecondary: {
    backgroundColor: colors.button.secondaryOutline.background,
    borderColor: colors.button.secondaryOutline.outline,
    borderWidth: 1,
    marginHorizontal: 57,
    borderRadius: 5,
  },
  textSecondary: {
    color: colors.button.secondaryOutline.text,
    textAlign: 'center',
    fontFamily: 'Segoe-UI',
    fontSize: 15,
    paddingVertical: 15,
  },
  buttonTertiary: isLittle => ({
    backgroundColor: colors.button.primaryOutline.background,
    borderColor: colors.button.primaryOutline.outline,
    borderWidth: 1,
    marginHorizontal: isLittle ? '37%' : 22,
    borderRadius: 5,
  }),
  textTertiary: {
    color: colors.button.primaryOutline.text,
    textAlign: 'center',
    fontFamily: 'Segoe-UI-SemiBold',
    fontSize: 14,
    paddingVertical: 5,
  },
});
