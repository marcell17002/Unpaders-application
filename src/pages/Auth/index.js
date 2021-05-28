import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {getData} from '../../utils';

const Auth = ({navigation}) => {
  useEffect(() => {
    const _validasiSession = async () => {
      const isLogin = await getData('user');
      if (isLogin) {
        const status = isLogin.status;
        if (status === 'alumni') return navigation.replace('MainAppGraduated');
        else if (status === 'mahasiswa')
          return navigation.replace('MainAppCollege');
        else return navigation.replace('MainApp');
      } else return navigation.replace('Splashscreen');
    };
    _validasiSession();
  }, [navigation]);
  return null;
};

export default Auth;
