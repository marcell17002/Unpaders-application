import { BASE_URL_ROOT } from '@env';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Buttons, Gap } from '../../atoms';

const CommentSection = ({image, author, waktu, desc, onPress}) => {
  return (
    <View style={styles.page}>
      <View style={styles.contComment}>
        <Image style={styles.logo} source={{uri: `${BASE_URL_ROOT}${image}`}} />
        <View style={styles.ketPenulis}>
          <Text style={styles.penulis}>{author}</Text>
          <Gap height={5} />
          <Text style={styles.waktu}>{waktu}</Text>
        </View>
        <View style={styles.buttonProfile}>
          <Buttons status="quarternary" title="Lihat Profile" onPress={onPress} />
        </View>
        
      </View>
      <Gap height={20} />
    </View>
  );
};

export default CommentSection;

const styles = StyleSheet.create({
  page: {
    marginLeft: 24,
    marginRight: 20,
    backgroundColor: colors.primaryWhite,
    flex: 1
  },
  contComment: {
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
  buttonProfile: {
    alignItems: 'flex-end',
    marginRight: 10,
    flex: 1,
  }
});
