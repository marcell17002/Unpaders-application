import {useEffect} from 'react';
import get from './get';
import post from './post';
import put from './put';
import drop from './drop';
import config from './config';
import {destroyData, getData, updateToken} from '../../utils';
import {BASE_URL} from '@env';
import axios from 'axios';
import {BackHandler} from 'react-native';
//response interceptor to refresh token on receiving token expired error

axios.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const errorMessage = JSON.parse(error.response.request._response).message;
    console.log('error root : ', error.response.status);
    const data = await getData('user').then(res => {
      if (res) {
        return res;
      }
    });
    console.log('isi error msg', errorMessage);
    if (error.response.status === 403 && errorMessage === 'jwt expired') {
      console.log('401 navigate to login');
      BackHandler.exitApp();
      return destroyData();
    } else if (
      (error.response.status === 403 ||
        errorMessage === 'Failed to authenticate token.') &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      console.log('FLAG REFRESH TOKEN', data.refreshToken);
      return axios
        .post(`${BASE_URL}/refreshToken`, {
          email: data.email,
          refreshToken: data.refreshToken,
        })
        .then(
          async response => {
            console.log('token baru generate success :', response.status);
            const newToken = response.data.data.token;
            if (response.status === 200) {
              console.log('token baru :', newToken);
              await updateToken('user', newToken);
            }
            console.log('Access token refreshed!');
            originalRequest.headers.Authorization = 'Bearer ' + newToken;
            return axios(originalRequest);
          },
          error => {
            console.log(
              'There has been a problem with your fetch operation: ' + error,
            );
          },
        );
    }
    return Promise.reject(error);
  },
);

//get
const getEvent = () => get('event', null);
const getEventByCategory = (variable, value) =>
  get(`event/${variable}/${value}`, null);
const getUserByCategory = (variable, value) =>
  get(`user/${variable}/${value}`, null);
const getProfileUser = async id => get(`user/_id/${id}`, null);
const getProfileCategory = async (variable, value) =>
  get(`user/${variable}/${value}`, null);
const getLikedEvent = async (variable, id) =>
  get(`likedEvent/${variable}/${id}`, null);
const getHistoryChat = async (variable, value) =>
  get(`historyChat/${variable}/${value}`, await config.withToken());
const getChat = async (variable, value) =>
  get(`chat/${variable}/${value}`, null);
const getDataAlumni = id => get(`alumni/${id}`, null);

//post
const postRegister = data => post('user/register', data, null);
const postLogIn = data => post('user/login', data, null);
const postLikedEvent = data => post('likedEvent', data, null);
const postNotifications = async data =>
  post('pushNotifications', data, await config.withToken());
const postEvent = async data => post('event', data, await config.withToken());
const postChat = async data => post('chat', data, null);
const postHistoryChat = async data =>
  post('historyChat', data, await config.withToken());

//put
const updateLikedEvent = async (data, id) =>
  put(`likedEvent/${id}`, data, null);
const updateProfileUser = async (data, id) =>
  put(`user/${id}`, data, await config.withToken());
const updateEvent = async (data, id) =>
  put(`event/${id}`, data, await config.withToken());
const updateHistory = async (data, id) =>
  put(`historyChat/${id}`, data, await config.withToken());
const updatePassword = async (data, id) =>
  put(`user/changePassword/${id}`, data, await config.withToken());

//delete
const deleteLikedEvent = async id => drop(`likedEvent/${id}`, null);
const deleteRefreshToken = async id => drop(`user/logout/${id}`, null);

export const api = {
  getEvent,
  getEventByCategory,
  getUserByCategory,
  getLikedEvent,
  getProfileUser,
  getProfileCategory,
  getHistoryChat,
  getChat,
  getDataAlumni,

  postRegister,
  postLogIn,
  postLikedEvent,
  postNotifications,
  postEvent,
  postChat,
  postHistoryChat,

  updateLikedEvent,
  updateProfileUser,
  updateEvent,
  updateHistory,
  updatePassword,

  deleteLikedEvent,
  deleteRefreshToken,
};
