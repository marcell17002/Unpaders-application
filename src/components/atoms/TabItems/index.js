import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

const TabItems = ({title, active, onLongPress, onPress}) => {
  const IconMenu = () => {
    switch (title) {
      case 'Home':
        return (
          <Image
            source={
              active
                ? require('../../../assets/home-active.png')
                : require('../../../assets/home-passive.png')
            }
            style={styles.image}
          />
        );
      case 'Alumi':
        return (
          <Image
            source={
              active
                ? require('../../../assets/agenda-active.png')
                : require('../../../assets/agenda-passive.png')
            }
            style={styles.image}
          />
        );
      case 'Chat':
        return (
          <Image
            source={
              active
                ? require('../../../assets/agenda-active.png')
                : require('../../../assets/agenda-passive.png')
            }
            style={styles.image}
          />
        );
      case 'Akun':
        return (
          <Image
            source={
              active
                ? require('../../../assets/profile-active.png')
                : require('../../../assets/profile-passive.png')
            }
            style={styles.image}
          />
        );
      default:
        return (
          <Image
            source={
              active
                ? require('../../../assets/home-active.png')
                : require('../../../assets/home-passive.png')
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

export default TabItems;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconStyle: active => ({
    fontSize: 25,
    color: active ? colors.text.primary : colors.text.secondary,
  }),
  text: active => ({
    color: active ? colors.text.quartenary : colors.text.secondary,
    fontSize: 12,
    fontWeight: 'bold',
  }),
});
