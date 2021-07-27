import {BASE_URL_ROOT} from '@env';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const ListAlumni = ({
  nama,
  fakultas,
  jurusan,
  angkatan,
  onPressBody,
  picture,
  disabled,
}) => {
  return (
    <View style={styles.page}>
      <Image
        style={styles.avatar}
        source={{uri: `${BASE_URL_ROOT}${picture}`}}
      />
      <TouchableOpacity
        onPress={disabled ? null : onPressBody}
        disabled={disabled}>
        <Text style={styles.namaAlumni}>{nama}</Text>
        <Gap height={8} />
        <View style={styles.secData}>
          <Text style={styles.desc}>{fakultas}</Text>
          <Text style={styles.desc}>-</Text>
          <Text style={styles.desc}>{jurusan}</Text>
          <Text style={styles.desc}>{angkatan}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListAlumni;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.grey,
    alignItems: 'center',
  },
  avatar: {
    height: 40,
    width: 40,
    resizeMode: 'cover',
    borderRadius: 20,
    alignContent: 'center',
    marginRight: 16,
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
    marginRight: 5,
  },
  secData: {
    flex: 1,
    flexDirection: 'row',
  },
});
