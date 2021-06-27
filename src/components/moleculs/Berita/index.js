import { BASE_URL_ROOT } from '@env';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const Berita = ({title, author, waktu, isiBerita, images, imagesUser}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.titleBerita}>{title}</Text>
      <Gap height={20} />
      <View style={styles.contPenulis}>
        <Image
          style={styles.logo}
          source={{uri: `${BASE_URL_ROOT}${imagesUser}`}}
        />
        <View style={styles.ketPenulis}>
          <Text style={styles.penulis}>{author}</Text>
          <Gap height={5} />
          <Text style={styles.waktu}>{waktu}</Text>
        </View>
      </View>
      <Gap height={20} />
      <View style={styles.beritaImage}>
        <Image
          style={styles.image}
          source={{uri: `${BASE_URL_ROOT}${images}`}}
        />
      </View>
      <Text style={styles.isiBerita}>{isiBerita}</Text>
    </View>
  );
};

export default Berita;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 24,
    marginRight: 20,
  },
  titleBerita: {
    fontSize: 24,
    fontFamily: fonts.secondary.semibold,
    color: colors.text.title,
  },
  contPenulis: {
    flexDirection: 'row',
    flex: 1,
  },
  ketPenulis: {
    flexDirection: 'column',
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    borderRadius: 20,
    alignSelf: 'center',
    marginRight: 16,
  },
  penulis: {
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    color: colors.text.title,
  },
  waktu: {
    fontSize: 12,
    fontFamily: fonts.primary.semibold,
    color: colors.text.secondGrey,
  },
  image: {
    height: 175,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
    marginBottom: 20,
  },
  isiBerita: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
});
