//import { Button } from 'native-base';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {Gap, Buttons} from '../../atoms';
import {BASE_URL_ROOT} from '@env';

const Comment = ({image, author, waktu, desc, onPress}) => {
  return (
    <View style={styles.page}>
      <View style={styles.contComment}>
        <Image style={styles.logo} source={{uri: `${BASE_URL_ROOT}${image}`}} />
        <View style={styles.ketPenulis}>
          <Text style={styles.penulis}>{author}</Text>
          <Gap height={5} />
          <Text style={styles.waktu}>{waktu}</Text>
        </View>
        {/* <Gap width={24} /> */}
        <View style={styles.buttonProfile}>
          <Buttons status="quarternary" title="Lihat Profile" onPress={onPress} />
        </View>
        
      </View>
      <Gap height={24} />
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  page: {
    marginLeft: 24,
    marginRight: 20,
    backgroundColor: 'white',
    flex: 1
    //justifyContent: 'space-between',
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
    color: colors.text.primary,
  },
  waktu: {
    fontSize: 12,
    fontFamily: fonts.primary.semibold,
    color: colors.text.tertiary,
  },
  buttonProfile: {
    alignItems: 'flex-end',
    flex: 1,

  }
});
