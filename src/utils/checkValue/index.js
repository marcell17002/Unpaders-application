import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const checkValue = (value, key) => {
  const promise = new Promise((resolve, reject) => {
    if (value === '') {
      reject(
        showMessage({
          message: `${key} tidak boleh kosong`,
          type: 'warning',
          color: colors.text.white,
        }),
      );
    } else resolve();
  });
  return promise;
};
