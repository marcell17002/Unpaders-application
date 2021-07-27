import {notifications} from '../notifications';

export const checkEmail = (value, message) => {
  const promise = new Promise((resolve, reject) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(value) === false) {
      console.log('Email is Not Correct');
      reject(
        notifications('warning', `${message} yang anda masukkan tidak tepat`),
      );
    } else resolve();
  });
  return promise;
};
