import {api} from '../../services';

export default checkAlumniExist = async nim => {
  const promise = new Promise(async (resolve, reject) => {
    await api.getDataAlumni(nim).then(
      res => resolve({message: 'Terverifikasi Alumni Unpad'}),
      err => reject({message: 'Oops, Sepertinya Anda Bukan Alumni Unpad?'}),
    );
  });
  return promise;
};
