import get from './get';
import post from './post';
import put from './put';
import drop from './drop';
import config from './config';
import {getData, storeData} from '../../utils';
import {BASE_URL} from '@env';
import axios from 'axios';

//request interceptor to add the auth token header to requests

// axios.interceptors.request.use(
//   config => {
//     getData('user').then(res => {
//       if (res) {
//         config.headers['Authorization'] = 'Bearer ' + res.token;
//         return res.token;
//       }
//     });

//     return config;
//   },
//   error => {
//     Promise.reject(error);
//   },
// );

//response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const data = await getData('user').then(res => {
      if (res) {
        return res;
      }
    });
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios
        .post(`${BASE_URL}/refreshToken`, {
          email: data.email,
          refreshToken: data.refreshToken,
        })
        .then(response => {
          const newToken = response.data.data.token;
          console.log('token baru :', newToken);
          if (response.status === 200) {
            getData('user').then(async res => {
              if (res) {
                var data = res;
                data = {
                  ...res,
                  token: newToken,
                };
                await storeData('user', data);
                console.log('isi data refresh :', data);
              }
            });
          }
          console.log('Access token refreshed!');
          originalRequest.headers.autorizarion = newToken;
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
