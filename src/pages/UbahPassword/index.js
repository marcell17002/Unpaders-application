import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap, Inputs} from '../../components/atoms';
import {
  checkSameData,
  colors,
  destroyData,
  fonts,
  getData,
  notifications,
  useForm,
} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {api} from '../../services';

const UbahPassword = ({navigation}) => {
  const user = useSelector(state => state).user;
  const dispatch = useDispatch();
  const [profile, setProfile] = useState([]);
  const [form, setForm] = useForm({
    email: user.email,
    password: '',
  });
  useEffect(async () => {
    await getData('user').then(res => {
      if (res) {
        return console.log('isi res', res);
      }
    });
  }, []);

  const [changePassword, setChangePassword] = useForm({
    newPassword: '',
    confirmPassword: '',
  });
  const onSave = async () => {
    const data = {
      id: '',
      email: '',
      name: '',
      status: '',
      token: '',
      refreshToken: '',
    };
    api.postLogIn(form).then(
      async res => {
        await checkSameData(
          changePassword.newPassword,
          changePassword.confirmPassword,
          'new password',
        ).then(
          res => {
            dispatch({type: 'SET_LOADING', value: true});
            api
              .updatePassword(
                {newPassword: changePassword.newPassword},
                user.id,
              )
              .then(
                res => {
                  dispatch({type: 'SET_LOADING', value: false});
                  destroyData();
                  dispatch({type: 'SET_PROFILE', value: data});
                  notifications('success', 'silahkan login kembali');
                  navigation.replace('Masuk');
                },
                err => console.log('isi error ', err),
              );
          },
          err => {
            dispatch({type: 'SET_LOADING', value: false});
          },
        );
      },
      err => {
        notifications('danger', 'kata sandi lama anda salah');
      },
    );
  };
  return (
    <View style={styles.page}>
      <View style={styles.contHeader}>
        <Headers
          type="sub-edit"
          title="Ubah Kata Sandi"
          namaButton="SIMPAN"
          onPressBack={() => navigation.goBack()}
          onPressRight={() => onSave()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.pages}>
        <View>
          <Gap height={16} />
          <Inputs
            value={form.password}
            secure
            onChangeText={value => setForm('password', value)}
            title="Kata Sandi Lama"
            placeholder="Masukkan Password Lama Anda"
          />
          <Gap height={16} />
          <Inputs
            value={changePassword.newPassword}
            secure
            onChangeText={value => setChangePassword('newPassword', value)}
            title="Kata Sandi Baru"
            placeholder="Masukkan kata sandi baru"
          />
          <Gap height={16} />
          <Inputs
            value={changePassword.confirmPassword}
            secure
            onChangeText={value => setChangePassword('confirmPassword', value)}
            title="Konfirmasi Kata Sandi Baru"
            placeholder="Konfirmasi kata sandi baru"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UbahPassword;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  pages: {
    paddingLeft: 24,
    paddingRight: 20,
  },
});
