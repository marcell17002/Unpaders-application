import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';

const UmumTabItems = ({title, active, onLongPress, onPress}) => {
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

export default UmumTabItems;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconStyle: active => ({
    fontSize: 25,
    color: active ? colors.text.primary : colors.text.secondary,
  }),
  text: active => ({
    //paddingTop: 5,
    color: active ? colors.text.quartenary : colors.text.secondary,
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    //fontWeight: 'bold',
  }),
});
