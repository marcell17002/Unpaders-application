import { Icon } from 'native-base';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const ListButton = ({type, namaTombol, image, onPress}) => {
  const ListButtonMenu = () => {
    switch (type) {
      case 'primary':
        return (
          <TouchableOpacity onPress={onPress}>
            <View style={styles.page}>
              <Text style={styles.namaButton}>{namaTombol}</Text>
              <Icon style={styles.iconStyle} name="chevron-forward" />
            </View>
          </TouchableOpacity>
        );
      case 'secondary':
        return (
          <TouchableOpacity style={styles.pageSecond} onPress={onPress}>
            <Image style={styles.logoSosmed} source={image} />
            <View>
              <Text style={styles.namaButton}>{namaTombol}</Text>
            </View>
          </TouchableOpacity>
        );
      default:
        return (
          <TouchableOpacity onPress={onPress}>
            <View style={styles.page}>
              <Text style={styles.namaButton}>{namaTombol}</Text>
              <Icon style={styles.iconStyle} name="chevron-forward" />
            </View>
          </TouchableOpacity>
        );
    }
  };
  return (
    <View>
      <ListButtonMenu />
    </View>
  );
};

export default ListButton;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.grey,
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  pageSecond: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.grey,
    alignItems: 'center',
    flex: 1,
  },
  namaButton: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  iconStyle: {
    color: colors.primaryBlack,
    justifyContent: 'flex-end',
  },
  logoSosmed: {
    height: 24,
    width: 24,
    resizeMode: 'cover',
    borderRadius: 20,
    marginRight: 16,
  },
});
