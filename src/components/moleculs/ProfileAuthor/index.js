import { BASE_URL_ROOT } from '@env';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const ProfileAuthor = ({picture, nama, fakultas, jurusan, angkatan}) => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <View>
          <Image
            style={styles.photoUser}
            source={{uri: `${BASE_URL_ROOT}${picture}`}}
          />
        </View>
        <Gap height={16} />
        <View>
          <Text style={styles.nama}>{nama}</Text>
          <Gap height={12} />
          <View style={styles.contPendidikan}>
            <Text style={styles.pendidikan}>{fakultas}</Text>
            <Text style={styles.pendidikan}> - </Text>
            <Text style={styles.pendidikan}>{jurusan}</Text>
            <Text style={styles.pendidikan}>{angkatan}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileAuthor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignSelf: 'center',
  },
  photoUser: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    borderRadius: 40,
    marginRight: 16,
    alignSelf: 'center',
  },
  nama: {
    fontSize: 18,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    textAlign: 'center',
  },
  pendidikan: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.secondGrey,
    marginRight: 5,
    textAlign: 'center',
  },
  contPendidikan: {
    flexDirection: 'row',
  },
});
