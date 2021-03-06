import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../utils';

const Auth = ({navigation}) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const _validasiSession = async () => {
      dispatch({type: 'SET_LOADING', value: false});
      const isLogin = await getData('user');
      if (isLogin) {
        const status = isLogin.status;
        console.log('isi session : ', isLogin);
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
