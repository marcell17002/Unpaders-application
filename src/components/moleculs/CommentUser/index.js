import { BASE_URL_ROOT } from '@env';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const CommentUser = ({image, name, waktu, komentar}) => {
  return (
    <View style={styles.page}>
      <View style={styles.contCommentUser}>
        <Image style={styles.logo} source={{uri: `${BASE_URL_ROOT}${image}`}} />
        <View style={styles.detailKomen}>
          <View style={styles.ketUser}>
            <Text style={styles.user}>{name}</Text>
            <Gap width={12} />
            <Text style={styles.waktu}>{waktu}</Text>
          </View>
          <View >
            <Text style={styles.komen}>{komentar}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CommentUser;

const styles = StyleSheet.create({
  page: {
    borderBottomWidth: 1,
    borderBottomColor: colors.text.grey,
    paddingLeft: 24,
    paddingRight: 20,
    backgroundColor: colors.primaryWhite,
  },
  contCommentUser: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  ketUser: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailKomen: {
    flexDirection: 'column',
    marginLeft: 16,
  },
  user: {
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
  },
  waktu: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    textAlignVertical: 'center',
  },
  komen: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    paddingRight: '10%',
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    borderRadius: 20,
  },
});