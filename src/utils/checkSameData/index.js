import {notifications} from '../notifications';

export const checkSameData = (value1, value2, message) => {
  const promise = new Promise((resolve, reject) => {
    if (value1 === value2) return resolve();
    else {
      return reject(
        notifications('danger', `${message} yang anda masukkan tidak sesuai`),
      );
    }
  });
  return promise;
};
