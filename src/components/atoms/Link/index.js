import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const Link = ({title, type, onPress}) => {
  const LinkType = () => {
    switch (type) {
      case 'primary':
        return (
          <TouchableOpacity onPress={onPress} style={styles.TextPrimary}>
            <Text style={styles.textPrimary}>{title}</Text>
          </TouchableOpacity>
        );
      case 'secondary':
        return (
          <TouchableOpacity onPress={onPress} style={styles.TextSecondary}>
            <Text style={styles.textSecondary}>{title}</Text>
          </TouchableOpacity>
        );
      default:
        return (
          <TouchableOpacity onPress={onPress} style={styles.TextPrimary}>
            <Text style={styles.textPrimary}>{title}</Text>
          </TouchableOpacity>
        );
    }
  };
  return (
    <View>
      <LinkType />
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  textPrimary: {
    fontSize: 14,
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.semibold,
    textAlign: 'center',
    marginBottom: 8,
  },
  textSecondary: {
    fontSize: 14,
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.semibold,
    textAlign: 'left',
    //marginTop: 8,
    marginBottom: 8,
  },
});
