import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {Headers, Kategori, Event} from '../../components/moleculs';
import {fonts, colors} from '../../../utils';
import {Gap} from '../../atoms';
import {BASE_URL_ROOT} from '@env';

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
  contCommentUser: {
    marginLeft: 24,
    marginRight: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.grey,
    paddingBottom: 16,
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
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
  },
  komen: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    maxWidth: 280,
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    borderRadius: 20,
    marginRight: 16,
  },
});
