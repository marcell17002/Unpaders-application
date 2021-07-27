import {notifications} from '../notifications';

export const checkCharLength = (value, minimum) => {
  const promise = new Promise((resolve, reject) => {
    if (!value.length === minimum) {
      console.log('isi', value.length, minimum);
      reject(
        notifications('warning', `Harap masukkan ${minimum} digit karakter`),
        err,
      );
    } else resolve();
  });
  return promise;
};
