import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const Kategori = ({type, active, title, onPress, pict}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(active)}>
      <View style={styles.ImageCont}>
        <Image 
          // style={styles.image} 
          style={{height: '80%', width: '80%', alignSelf: 'center',}}
          resizeMode='contain'
          source={pict} />
      </View>
      <Gap height={16} />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Kategori;

const styles = StyleSheet.create({
  container: active => ({
    height: 91,
    //width: 62,
    flex: 1,
    //paddingTop: 14,
    paddingBottom: 12,
    borderRadius: 5,
    marginRight: 10,
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: active ? colors.primary : colors.primaryWhite,
    //backgroundColor: 'yellow',
  }),
  ImageCont: {
    justifyContent: 'center',
  },
  text: active => ({
    marginTop: -20,
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    color: active ? colors.primaryWhite : colors.text.secondGrey,
    textAlign: 'center',
  }),
});
