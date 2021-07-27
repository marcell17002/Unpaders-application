import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';

const TabItems = ({title, active, onLongPress, onPress}) => {
  const IconMenu = () => {
    switch (title) {
      case 'Home':
        return (
          <Image
            source={
              active
                ? require('../../../assets/AHome-active.png')
                : require('../../../assets/AHome-passive.png')
            }
            style={styles.image}
            resizeMode='cover'
          />
        );
      case 'Chat':
        return (
          <Image
            source={
              active
                ? require('../../../assets/AChat-active.png')
                : require('../../../assets/AChat-passive.png')
            }
            style={styles.image}
            resizeMode='cover'
          />
        );
      case 'List Alumni':
        return (
          <Image
            source={
              active
                ? require('../../../assets/AList-active.png')
                : require('../../../assets/AList-passive.png')
            }
            style={styles.image}
            resizeMode='cover'
          />
        );
      case 'Berita':
        return (
          <Image
            source={
              active
                ? require('../../../assets/ABerita-active.png')
                : require('../../../assets/ABerita-passive.png')
            }
            style={styles.image}
            resizeMode='cover'
          />
        );
      case 'Lainnya':
        return (
          <Image
            source={
              active
                ? require('../../../assets/ALainnya-active.png')
                : require('../../../assets/ALainnya-passive.png')
            }
            style={styles.image}
            resizeMode='cover'
          />
        );
        case 'Profil':
          return (
            <Image
              source={
                active
                  ? require('../../../assets/AProfile-active.png')
                  : require('../../../assets/AProfile-passive.png')
              }
              style={styles.image}
              resizeMode='cover'
            />
          );  
      default:
        return (
          <Image
            source={
              active
                ? require('../../../assets/AHome-active.png')
                : require('../../../assets/AHome-passive.png')
            }
            style={styles.image}
            resizeMode='cover'
          />
        );
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <IconMenu />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItems;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconStyle: active => ({
    fontSize: 25,
    color: active ? colors.text.primary : colors.text.secondary,
  }),
  text: active => ({
    color: active ? colors.text.primdonker2 : colors.text.secondary,
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    marginTop: -12,
    //backgroundColor: 'yellow',
  }),
  image: {
    //backgroundColor: 'yellow',
    maxWidth: '50%',
    maxHeight:'50%',
    alignItems: 'center',
  }
});
