import React, {useState, useEffect} from 'react';
import Router from './router';
import {StyleSheet, Text, Alert, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './services/redux/store';
import {Loading} from './components/atoms';
import {useSelector, useDispatch} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {notifications} from './utils';

const MainApp = () => {
  LogBox.ignoreAllLogs();
  const stateGlobal = useSelector(state => state);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const header = remoteMessage.notification.title;
      const body = remoteMessage.notification.body;
      notifications('info', `${header} \n${body}`);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="center" /> 
      {/* sebelumnya positionnya "top" */}
      {stateGlobal.loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
