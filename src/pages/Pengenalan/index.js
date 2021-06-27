import {BASE_IMG} from '@env';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Buttons, Gap, Link} from '../../components/atoms';
import {api} from '../../services';
import {
  colors,
  fonts,
  getData,
  randomId,
  randomName,
  requestToken,
  storeData,
} from '../../utils';

const Pengenalan = ({navigation}) => {
  const dispatch = useDispatch();

  const generateUserId = async () => {
    const name = await randomName();
    const uniqId = await randomId();
    const dataUser = {
      name: name,
      status: 'umum',
      email: `${uniqId}`,
      password: `${uniqId}`,
      phone: `${uniqId}`,
      image: BASE_IMG,
    };

    api.postRegister(dataUser).then(
      async res => {
        const data = {
          ...res.data,
          id: res.data._id,
        };
        await dispatch({type: 'SET_PROFILE', value: data});
        requestToken(data.id);
        console.log('isi  register :', data);
        await storeData('user', data);
      },
      err => console.log('isi err register :', err),
    );
    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.page}>
      <Gap height={12} />
      <View style={styles.contImage}>
        <Image
          source={require('../../assets/Intro.png')}
          style={StyleSheet.image}
        />
      </View>
      <Gap height={16} />
      <View style={styles.contPage}>
        <View>
          <View>
            <Text style={styles.title}>Hai, IKA Universitas Padjadjaran!</Text>
          </View>
          <Gap height={16} />
          <View>
            <Text style={styles.subtitle}>
              Unpaders adalah portal komunitas untuk alumni
            </Text>
            <Text style={styles.subtitle}>
              Universitas Padjadaran yang bertujuan untuk
            </Text>
            <Text style={styles.subtitle}>mewadahi keberagaman IKA Unpad</Text>
          </View>
        </View>
      </View>
        <Gap height={20} />
      <View style={styles.contButton}>
          <View>
            <Buttons title="Daftar" onPress={() => navigation.replace('Daftar')} />
            <Buttons
              status="tertiary"
              title="Masuk"
              onPress={() => navigation.replace('Masuk')}
            />
            <Link
              onPress={() => generateUserId()}
              title="Daftar sebagai Pengunjung"
            />
          </View>
      </View>
      
    </View>
  );
};

export default Pengenalan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 22,
  },
  contImage: {
    alignItems: 'center',
    flex: 2.5,
    justifyContent: 'space-around',
  },
  contPage: {
    flex: 1.5,
    justifyContent: 'space-around',
  },
  contButton: {
    flex: 2,
    justifyContent: 'space-around',
  },
  image: {
    width: 250,
    height: 164,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.text.primdonker2,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
