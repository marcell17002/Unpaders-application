//import { Button } from 'native-base';
import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import {Buttons, Gap, Link} from '../../components/atoms';
import {
  fonts,
  colors,
  randomName,
  randomId,
  storeData,
  getData,
} from '../../utils';
import {useDispatch} from 'react-redux';
import {BASE_IMG} from '@env';
import {api} from '../../services';

const Intro = ({navigation}) => {
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
        console.log('isi  register :', data);
        await storeData('user', data);
      },
      err => console.log('isi err register :', err),
    );
    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.page}>
      <View style={styles.contImage}>
        <Image
          source={require('../../assets/Intro.png')}
          style={StyleSheet.image}
        />
      </View>

      <View>
        <Text style={styles.title}>Hai, IKA Universitas Padjadjaran!</Text>
      </View>
      <Gap height={24} />
      <View>
        <Text style={styles.subtitle}>
          Unpaders adalah portal komunitas untuk alumni
        </Text>
        <Text style={styles.subtitle}>
          Universitas Padjadaran yang bertujuan untuk
        </Text>
        <Text style={styles.subtitle}>mewadahi keberagaman IKA Unpad</Text>
      </View>
      <Gap height={30} />
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
  );
};

export default Intro;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 22,
    paddingTop: 60,
  },
  contImage: {
    marginBottom: 50,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 164,
  },
  title: {
    //GAMAU KEGANTI BOLD NYA
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.text.primdonker2,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    textAlign: 'center',
  },
});
