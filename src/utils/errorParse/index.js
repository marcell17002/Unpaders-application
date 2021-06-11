import {notifications} from '../notifications';

export const errorParse = async error => {
  const message = await JSON.parse(error.response.request._response).data[0]
    .msg;
  console.log('isi errr :', error);
  notifications('danger', message);
};
