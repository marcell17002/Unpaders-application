import {notifications} from '../notifications';

export const checkSameData = (value1, value2, message) => {
  const promise = new Promise((resolve, reject) => {
    if (value1 === value2) return resolve();
    else {
      reject(
        notifications(
          'danger',
          `oops ${message} yang anda masukkan belum sesuai`,
        ),
      );
    }
  });
  return promise;
};
