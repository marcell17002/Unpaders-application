import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const notifications = (type, message) => {
  if (type === 'success') {
    showMessage({
      message: message,
      type: type,
      color: colors.text.primary,
      position: 'top',
      backgroundColor: colors.notif.succes,
    });
  } else if (type === 'warning') {
    showMessage({
      message: message,
      type: type,
      color: colors.text.primary,
      position: 'top',
      backgroundColor: colors.notif.warning,
    });
  } else if (type === 'danger') {
    showMessage({
      message: message,
      type: type,
      color: colors.text.primary,
      position: 'top',
      backgroundColor: colors.notif.danger,
    });
  } else if (type === 'info') {
    showMessage({
      message: message,
      type: type,
      color: colors.text.primary,
      position: 'top',
      backgroundColor: colors.notif.succes,
    });
  } else {
    showMessage({
      message: message,
      type: type,
      color: colors.text.white,
    });
  }
};
