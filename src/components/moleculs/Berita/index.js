import { BASE_URL_ROOT } from '@env';
import React from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const WINDOW_WIDTH = Dimensions.get('window').width;

const Berita = ({title, author, waktu, isiBerita, images, imagesUser}) => {

  const scale = React.useRef(new Animated.Value(1)).current;

  const renderCarousel = () => (
    <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
      <Image
        style={{ flex: 1 }}
        resizeMode="contain"
        source={{uri: `${BASE_URL_ROOT}${images}`}}
      />
    </Carousel>
  )

  return (
    <View style={styles.page}>
      <Text style={styles.titleBerita}>{title}</Text>
      <Gap height={20} />
      <View style={styles.contPenulis}>
        <Image
          style={styles.logo}
          source={{uri: `${BASE_URL_ROOT}${imagesUser}`}}
        />
        <View style={styles.ketPenulis}>
          <Text style={styles.penulis}>{author}</Text>
          <Gap height={5} />
          <Text style={styles.waktu}>{waktu}</Text>
        </View>
      </View>
      <Gap height={20} />

      <View style={styles.beritaImage}>
        <Lightbox springConfig={{tension: 15, friction: 7}} renderContent={renderCarousel}>
            <Animated.Image
              style={[styles.image, {transform: [{scale}]}]}
              source={{uri: `${BASE_URL_ROOT}${images}`}}/>
        </Lightbox>
      </View>
      <Gap height={16}/>
      <Text style={styles.isiBerita}>{isiBerita}</Text>
    </View>
  );
};

export default Berita;

const styles = StyleSheet.create({
  closeButton: {
    color: "black",
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: colors.primaryWhite,
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 20,
    textAlign: 'center',
    margin: 14,
    alignSelf: 'flex-end',
    fontFamily: fonts.primary.bold,
    fontSize: 16,
  },
  beritaImage:{
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.input.outline,
  },
  page: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 24,
    marginRight: 20,
  },
  titleBerita: {
    fontSize: 20,
    fontFamily: fonts.primary.semibold,
    color: colors.text.title,
  },
  contPenulis: {
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
    color: colors.text.title,
  },
  waktu: {
    fontSize: 12,
    fontFamily: fonts.primary.semibold,
    color: colors.text.secondGrey,
  },
  image: {
    height:175 ,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  isiBerita: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
});
