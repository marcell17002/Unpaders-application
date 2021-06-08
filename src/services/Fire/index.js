import getter from './getter';
import setter from './setter';
import destroy from './destroy';

const getToken = id => getter('users', id);
const setToken = (id, payload) => setter('users', id, payload);
const destroyToken = id => destroy('users', id);

export const Fire = {
  getToken,
  setToken,
  destroyToken,
};
