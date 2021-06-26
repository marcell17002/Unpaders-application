import { BASE_URL_ROOT } from '@env';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { TextColor } from '../../atoms';

const Event = ({
  picture,
  userPicture,
  isHistory,
  status,
  category,
  time,
  title,
  author,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.event} onPress={onPress}>
      <View style={styles.eventImage}>
        <Image
          style={styles.image}
          source={{uri: `${BASE_URL_ROOT}${picture}`}}
        />
      </View>
      <View style={styles.eventDetail}>
        <View style={styles.eventTimeDetail}>
          <Text style={styles.KategoriWaktu}>{category}</Text>
          <Text style={styles.KategoriWaktu}> - </Text>
          <Text style={styles.KategoriWaktu}> {time}</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.Judul}>{title}</Text>
        </View>
        <View style={styles.eventCreatorDetail}>
          {isHistory ? (
            <>
              <View>
                <Text style={styles.statusStyle}>STATUS : </Text>
              </View>
              <TextColor type={status} />
            </>
          ) : (
            <>
              <Image
                style={styles.logo}
                source={{uri: `${BASE_URL_ROOT}${userPicture}`}}
              />
              <Text style={styles.penulis}>{author}</Text>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Event;

const styles = StyleSheet.create({
  event: {
    flexDirection: 'row',
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 20,
  },
  image: {
    height: 110,
    width: 128,
    resizeMode: 'cover',
    borderRadius: 5,
    alignSelf: 'center',
  },
  logo: {
    height: 20,
    width: 20,
    resizeMode: 'cover',
    borderRadius: 10,
    alignSelf: 'center',
    marginRight: 10,
  },
  title: {
    flexShrink: 1,
  },
  eventDetail: {
    flex: 1,
    marginLeft: '5%',
    flexDirection: 'column',
  },
  eventTimeDetail: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  KategoriWaktu: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primdonker2,
    marginTop: -6,
  },
  eventCreatorDetail: {
    flexDirection: 'row',
  },
  Judul: {
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text.title,
    marginTop: -4,
  },
  title: {
    marginVertical: 8,
  },
  penulis: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    textAlignVertical: 'top',
  },
  statusStyle: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.title,
  }
});
