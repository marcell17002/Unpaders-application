import React, {useEffect} from 'react';
import {getData} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';

const Auth = ({navigation}) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const _validasiSession = async () => {
      const isLogin = await getData('user');
      if (isLogin) {
        const status = isLogin.status;
        await dispatch({type: 'SET_PROFILE', value: isLogin});
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
