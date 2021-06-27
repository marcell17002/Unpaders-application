import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Buttons, Gap, Link } from '../../components/atoms';
import { colors, fonts } from '../../utils';

const Daftar = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.contImage}>
        <View>
          <Image
            source={require('../../assets/LogoBesar.png')}
            style={StyleSheet.image}
          />
          <Text style={styles.title}>Daftar</Text>
        </View>
      </View>
      <Gap height={16} />
      <View style={styles.contButton}>
        <View>
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
        </View>
      </View>
        <Gap height={16} />
        <View style={styles.contMasuk}>
          <View>
            <Text style={styles.buttonlink}>Sudah punya Akun?</Text>
            <Link
              onPress={() => navigation.navigate('Masuk')}
              title="Masuk disini"
            />
          </View>
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
    alignItems: 'center',
    flex: 1.5,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    marginTop: 12,
    textAlign: 'center',
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.bold,
  },
  contButton: {
    paddingLeft: 24,
    paddingRight: 20,
    flex: 3,
  },
  buttonlink: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    color: colors.text.tertiary,
    marginBottom: 4,
  },
  contMasuk:{
    flex: 1.5/2,
    justifyContent: 'space-around',
  }
});
