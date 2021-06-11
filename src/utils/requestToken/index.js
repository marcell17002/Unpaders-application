import messaging from '@react-native-firebase/messaging';
import {Fire} from '../../services';

const getFcmToken = async id => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    Fire.setToken(id, fcmToken);
  } else {
    console.log('Failed', 'No token received');
  }
};

export const requestToken = async id => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken(id);
  }
};
