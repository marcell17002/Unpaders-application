import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Buttons, Gap, Inputs, Link} from '../../components/atoms';
import {api} from '../../services';
import {
  checkValue,
  colors,
  fonts,
  notifications,
  requestToken,
  storeData,
  useForm,
} from '../../utils';

const Masuk = ({navigation}) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const checkValueNull = () => {
    checkValue(form.email, 'email');
    checkValue(form.password, 'password');
  };
  const onLog = async () => {
    await checkValueNull();
    dispatch({type: 'SET_LOADING', value: true});
    api.postLogIn(form).then(
      async res => {
        console.log('isi res ', res.data);
        dispatch({type: 'SET_LOADING', value: false});
        dispatch({type: 'SET_PROFILE', value: res.data});
        const status = res.data.status;
        notifications('success', 'login berhasil');
        console.log('data sucess', res.data);
        requestToken(res.data.id);
        await storeData('user', res.data);
        if (status === 'alumni') navigation.replace('MainAppGraduated');
        else if (status === 'mahasiswa') navigation.replace('MainAppCollege');
        else navigation.replace('MainAppCollege');
      },
      err => {
        console.log('isi err ', err);
        dispatch({type: 'SET_LOADING', value: false});
        notifications('danger', 'email atau kata sandi salah');
      },
    );
  };
  return (
    <View style={styles.page}>
      <View style={styles.contImage}>
        <View>
          <Image
            source={require('../../assets/LogoBesar.png')}
            resizeMode='contain'
            style={{maxWidth: '70%',}}
          />
          <Text style={styles.title}>Masuk</Text>
        </View>
      </View>
      <Gap height={16} />
      <View style={styles.contInputan}>
        <Inputs
          title="Email"
          value={form.email}
          onChangeText={value => setForm('email', value)}
          placeholder="Masukkan Email"
        />
        <Gap height={16} />
        <Inputs
          title="Kata Sandi"
          secure
          value={form.password}
          onChangeText={value => setForm('password', value)}
          placeholder="Masukkan Kata Sandi"
        />
        <Gap height={32} />
        <Buttons title="Masuk" onPress={() => onLog()} />
          <View style={styles.contLink}>
            <Text style={styles.buttonlink}>Belum punya Akun?</Text>
            <Gap width={8}/>
            <Link
              onPress={() => navigation.navigate('Daftar')}
              title="Daftar disini"
            />
      </View>
      {/* <Gap height={16} />
      <View style={styles.contButton}>
        <View>
          
          </View>
        </View> */}
      </View>
    </View>
  );
};

export default Masuk;

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
  contInputan: {
    flex: 4,
    paddingLeft: 24,
    paddingRight: 20,
  },
  buttonlink: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
  },
  contLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -8,
  }
});
