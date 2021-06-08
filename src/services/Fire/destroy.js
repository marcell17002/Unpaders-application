import Config from './config';

const destroy = (prefix, id) => {
  return Config.database()
    .ref(`/${prefix}/${id}`)
    .remove()
    .then(() => console.log('Token successfully deleted'));
};

export default destroy;
