import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, fonts } from '../../../utils';

const TextColor = ({type}) => {
  switch (type) {
    case 'waiting':
      return <Text style={styles.waiting}>Tunggu Konfirmasi</Text>;
    case 'published':
      return <Text style={styles.success}>Berhasil</Text>;
    case 'failed':
      return <Text style={styles.failed}>Ditolak</Text>;
    default:
      return null;
  }
};

export default TextColor;

const styles = StyleSheet.create({
  waiting: {
    color: colors.text.quartenary,
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
  },
  success: {
    color: colors.text.primaryGreen,
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
  },
  failed: {
    color: colors.text.primaryRed,
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
  },
});
