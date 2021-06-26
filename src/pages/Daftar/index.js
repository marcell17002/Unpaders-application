import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Buttons, Gap, Link } from '../../components/atoms';
import { colors, fonts } from '../../utils';

const Daftar = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.contImage}>
        <Image
          source={require('../../assets/LogoBesar.png')}
          style={StyleSheet.image}
        />
        <Text style={styles.title}>Daftar</Text>
      </View>
      <Gap height={80} />
      <View style={styles.button}>
        <Buttons
          title="Daftar sebagai Alumni"
          onPress={() =>
            navigation.navigate('FormDaftar', {status: 'alumni'})
          }
        />
        <Buttons
          status="tertiary"
          title="Daftar sebagai Mahasiswa"
          onPress={() =>
            navigation.navigate('FormDaftar', {status: 'mahasiswa'})
          }
        />
        <Gap height={62} />
        <Text style={styles.buttonlink}>Sudah punya Akun?</Text>
        <Link
          onPress={() => navigation.navigate('Masuk')}
          title="Masuk disini"
        />
      </View>
    </View>
  );
};

export default Daftar;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  contImage: {
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginTop: 12,
    textAlign: 'center',
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.bold,
  },
  button: {
    paddingLeft: 24,
    paddingRight: 20,
  },
  buttonlink: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    color: colors.text.tertiary,
    marginTop: -8,
    marginBottom: 8,
  },
});
