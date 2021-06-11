import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const Kategori = ({type, active, title, onPress, pict}) => {
  // const Ctgry = () => {
  //   if (type === 'aktif') {
  //     return (
  //     <>
  //       <TouchableOpacity onPress={onPress} style={styles.containerActive}>
  //         <View style={styles.ImageCont}>
  //           <Image style={styles.image} source={pict} />
  //         </View>
  //         <Gap height={16} />
  //         <Text style={styles.textActive}>{title}</Text>
  //       </TouchableOpacity>
  //     </>
  //     );
  //   }
  //   else {
  //     <>
  //       <TouchableOpacity onPress={onPress} style={styles.container}>
  //         <View style={styles.ImageCont}>
  //           <Image style={styles.image} source={pict} />
  //         </View>
  //         <Gap height={16} />
  //         <Text style={styles.text}>{title}</Text>
  //       </TouchableOpacity>
  //     </>
  //   }
  // };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(active)}>
      <View style={styles.ImageCont}>
        <Image style={styles.image} source={pict} />
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
    width: 62,
    paddingTop: 14,
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
  }),
  containerActive: {
    height: 91,
    width: 62,
    paddingTop: 14,
    paddingBottom: 12,
    borderRadius: 5,
    marginRight: 10,
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: colors.primary,
  },
  ImageCont: {
    justifyContent: 'space-between',
    alignContent: 'stretch',
  },
  image: {
    paddingBottom: 16,
    alignSelf: 'center',
  },
  text: active => ({
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    color: active ? colors.primaryWhite : colors.text.tertiary,
    textAlign: 'center',
  }),
  textActive: {
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    color: colors.primaryWhite,
    textAlign: 'center',
  },
});
