import { Icon } from 'native-base';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const Buttons = ({status, isLittle, title, onPress, disable}) => {
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
      case 'quarternary':
        return (
          <TouchableOpacity onPress={onPress} style={styles.buttonQuarternary}>
            <Text style={styles.textQuarternary}> {title} </Text>
          </TouchableOpacity>
        );
      case 'button-icon':
        return (
          <TouchableOpacity
            style={styles.iconBundle(disable)}
            onPress={onPress}
            disable={disable ? true : false}>
            <Icon style={styles.iconDisable(disable)} name="send" />
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
    borderRadius: 5,
    marginBottom: 24,
  },
  textPrimary: {
    color: colors.button.primary.text,
    textAlign: 'center',
    fontFamily: fonts.primary.semibold, 
    fontSize: 16,
    paddingVertical: 12,
  },
  buttonSecondary: {
    backgroundColor: colors.button.secondaryOutline.background,
    borderColor: colors.button.secondaryOutline.blue,
    borderWidth: 1,
    borderRadius: 5,
  },
  textSecondary: {
    color: colors.button.secondaryOutline.blue,
    textAlign: 'center',
    fontFamily: fonts.primary.semibold,
    fontSize: 16,
    paddingVertical: 10,
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
    fontFamily: fonts.primary.semibold,
    fontSize: 16,
    paddingVertical: 12,
  },
  buttonQuarternary: {
    backgroundColor: colors.primaryWhite,
    borderColor: colors.button.secondaryOutline.background,
    borderRadius: 5,
  },
  textQuarternary: {
    color: colors.button.secondaryOutline.blue,
    textAlign: 'center',
    fontFamily: fonts.primary.semibold,
    fontSize: 14,
  },
  iconBundle: disable => ({
    backgroundColor: disable ? colors.backgroundgrey : colors.primary,
    width: 52,
    height: 52,
    padding: 8,
    borderRadius: 10,
  }),
  iconDisable: disable => ({
    alignSelf: 'center',
    justifyContent: 'space-between',
    color: disable ? colors.primarygrey : colors.primaryWhite,
  }),
});
