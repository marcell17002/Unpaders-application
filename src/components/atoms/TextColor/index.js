import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const TextColor = ({type}) => {
  switch (type) {
    case 'waiting':
      return <Text style={styles.waiting}>Menunggu Konfirmasi</Text>;
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
  },
  success: {
    color: colors.text.primaryGreen,
  },
  failed: {
    color: colors.text.primaryRed,
  },
});
