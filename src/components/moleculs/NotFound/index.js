import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Gap } from '../../../components/atoms';
import { colors, fonts } from '../../../utils';

const NotFound = ({type, title}) => {
  const SectionNotFound = () => {
    if (type === 'ChatKosong') {
      return (
        <View style={styles.page}>
          <Text style={styles.Judul}>Belum ada percakapan</Text>
          <Gap height={24} />
          <Text style={styles.deskripsi}>
            Silahkan mulai percakapan dengan teman Anda
          </Text>
          <Gap height={24} />
          <View>
            <Image
              style={styles.photo1}
              source={require('../../../assets/NotFoundChat.png')}
            />
          </View>
        </View>
      );
    } else if (type === 'Search') {
      return (
        <View style={styles.page}>
          <Text style={styles.Judul}>Tidak ada hasil yang ditemukan</Text>
          <Gap height={24} />
          <Text style={styles.deskripsi}>Coba cari dengan kata kunci lain</Text>
          <Gap height={24} />
          <View>
            <Image
              style={styles.photo1}
              source={require('../../../assets/NotFoundBerita.png')}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.page}>
          <Text style={styles.judulDefault}>{title}</Text>
        </View>
      );
    }
  };
  return (
    <View>
      <SectionNotFound />
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primaryWhite,
  },
  judulDefault: {
    fontSize: 17,
    fontFamily: fonts.primary.semibold,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  Judul: {
    fontSize: 20,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    alignSelf: 'center',
  },
  deskripsi: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    alignSelf: 'center',
  },
  photo1: {
    backgroundColor: colors.primaryWhite,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
