import Config from './config';

const get = (prefix, id) => {
  const promise = new Promise((resolve, reject) => {
    Config.database()
      .ref(`/${prefix}/${id}`)
      .once('value')
      .then(
        res => {
          resolve(res);
        },
        err => reject(err),
      );
  });
  return promise;
};

export default get;
