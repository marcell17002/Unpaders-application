import { BASE_URL_ROOT } from '@env';
import { Badge } from 'native-base';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const ListAlumniChat = ({nama, lastText, isBadge, picture, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Image
        style={styles.avatar}
        source={{uri: `${BASE_URL_ROOT}${picture}`}}
      />
      <View>
        <Text style={styles.namaAlumni}>{nama}</Text>
        <Gap height={8} />
        <Text style={styles.desc}>{lastText}</Text>
      </View>
      {isBadge ? (
        <View style={styles.badgeWrapper}>
          <Badge style={styles.badge}>
            <Text style={styles.badgeText}>1</Text>
          </Badge>
        </View>
      ) : (
        <View />
      )}
    </TouchableOpacity>
  );
};

export default ListAlumniChat;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.grey,
    alignItems: 'center',
  },
  avatar: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    borderRadius: 20,
    alignSelf: 'center',
    marginRight: 20,
  },
  namaAlumni: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.title,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.secondGrey,
  },
  badgeWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  badge: {
    backgroundColor: colors.primary,
  },
  badgeText: {
    color: '#ffff',
    paddingVertical: 1,
    paddingHorizontal: 3,
  },
});
