import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap, InputPassword, Inputs} from '../../components/atoms';
import {Icon} from 'native-base';
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
  const [isSecureEntry, setIsSecureEntry] = useState(true); //show/hide password
  const [isSecureEntry2, setIsSecureEntry2] = useState(true); //show/hide password2
  const [isSecureEntry3, setIsSecureEntry3] = useState(true); //show/hide password3
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
                  notifications('success', 'Silahkan login kembali');
                  navigation.replace('Masuk');
                },
                err => {
                  const message = JSON.parse(err.response.request._response)
                    .data[0].msg;
                  console.log('isi errr :', message);
                  notifications('danger', message);
                  dispatch({type: 'SET_LOADING', value: false});
                },
              );
          },
          err => {
            dispatch({type: 'SET_LOADING', value: false});
          },
        );
      },
      err => {
        notifications('danger', 'Kata sandi lama Anda salah');
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
          <InputPassword
            value={form.password}
            secure={isSecureEntry}
            onChangeText={value => setForm('password', value)}
            title="Kata Sandi Lama"
            placeholder="Masukkan Password Lama Anda"
            iconEye={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Icon
                  style={styles.iconStyle}
                  type="Entypo"
                  name={isSecureEntry ? 'eye-with-line' : 'eye'}
                />
              </TouchableOpacity>
            }
          />
          <Gap height={16} />
          <InputPassword
            value={changePassword.newPassword}
            secure={isSecureEntry2}
            onChangeText={value => setChangePassword('newPassword', value)}
            title="Kata Sandi Baru"
            placeholder="Masukkan kata sandi baru"
            placeholderTextColor="#787878"
            iconEye={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry2(prev => !prev);
                }}>
                <Icon
                  style={styles.iconStyle}
                  type="Entypo"
                  name={isSecureEntry2 ? 'eye-with-line' : 'eye'}
                />
              </TouchableOpacity>
            }
          />
          <Gap height={16} />
          <InputPassword
            value={changePassword.confirmPassword}
            secure={isSecureEntry3}
            onChangeText={value => setChangePassword('confirmPassword', value)}
            title="Konfirmasi Kata Sandi Baru"
            placeholder="Konfirmasi kata sandi baru"
            placeholderTextColor="#787878"
            iconEye={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry3(prev => !prev);
                }}>
                <Icon
                  style={styles.iconStyle}
                  type="Entypo"
                  name={isSecureEntry3 ? 'eye-with-line' : 'eye'}
                />
              </TouchableOpacity>
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UbahPassword;

const styles = StyleSheet.create({
  iconStyle: {
    color: colors.tertierGrey,
  },
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  pages: {
    paddingLeft: 24,
    paddingRight: 20,
  },
});
