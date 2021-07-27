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
            resizeMode='contain'
            style={{maxWidth: '70%',}}
          />
          <Text style={styles.title}>Daftar</Text>
        </View>
      </View>
      
      <View style={styles.contButton}>
        <Gap height={48} />
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
          <Gap height={16} />

          <View style={styles.contLink}>
            <Text style={styles.buttonlink}>Sudah punya Akun?</Text>
            <Gap width={8}/>
            <Link
              onPress={() => navigation.navigate('Masuk')}
              title="Masuk disini"
            />
          </View>

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
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 12,
    textAlign: 'center',
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.bold,
  },
  contButton: {
    paddingLeft: 24,
    paddingRight: 20,
    flex: 4,
  },
  buttonlink: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    color: colors.text.tertiary,
    marginBottom: 4,
  },
  contLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -8,
  }
});
