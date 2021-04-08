import {getData} from '../../utils';

const withToken = async config => {
  const token = await getData('user').then(res => {
    if (res) {
      return res.token;
    }
  });
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const config = {
  withToken,
};

export default config;
