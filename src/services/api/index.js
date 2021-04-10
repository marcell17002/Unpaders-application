import get from './get';
import post from './post';
import put from './put';
import drop from './drop';
import config from './config';
import {destroyData, getData, updateToken} from '../../utils';
import {BASE_URL} from '@env';
import axios from 'axios';
import {goToLogin} from '../../router/helpers';
import {NavigationService} from '../../router/navigationHandler';

//response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const data = await getData('user').then(res => {
      if (res) {
        return res;
      }
    });
    if (error.response.status === 401) {
      NavigationService.navigate('Login');
      console.log('401 navigate to login');
      await destroyData();
    }
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log('FLAG REFRSH TOKEN');
      return axios
        .post(`${BASE_URL}/refreshToken`, {
          email: data.email,
          refreshToken: data.refreshToken,
        })
        .then(async response => {
          const newToken = response.data.data.token;
          console.log('token baru :', newToken);
          if (response.status === 200) {
            await updateToken('user', newToken);
          }
          console.log('Access token refreshed!');
          originalRequest.headers.Authorization = 'Bearer ' + newToken;
          return axios(originalRequest);
        })
        .catch(function (error) {
          console.log(
            'There has been a problem with your fetch operation: ' +
              error.message,
          );
          throw error;
        });
    }
    return Promise.reject(error);
  },
);

//get
const getEvent = async () => get('event', await config.withToken());

//post
const postRegister = async data => post('user/login', data);

export const api = {
  getEvent,
  postRegister,
};
