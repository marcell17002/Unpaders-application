import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Buttons, Gap, Inputs} from '../../components/atoms';
import {useForm, storeData, getData, destroyData} from '../../utils';
import {api} from '../../services';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '@env';
import firebase from 'react-native-firebase';

const Login = () => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  // useEffect(() => {
  //   requestUserPermission();
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });
  //   return unsubscribe;
  // }, []);

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  //   if (enabled) {
  //     getFcmToken(); //<---- Add this
  //     console.log('Authorization status:', authStatus);
  //   }
  // };

  // const getFcmToken = async () => {
  //   const fcmToken = await messaging().getToken();
  //   if (fcmToken) {
  //     console.log(fcmToken);
  //     console.log('Your Firebase Token is:', fcmToken);
  //   } else {
  //     console.log('Failed', 'No token received');
  //   }
  // };
  const onContinue = () => {
    console.log('isi data', form);
    api.postRegister(form).then(
      async res => {
        console.log('berhasil :', res.data);
        await storeData('user', res.data);
      },
      error => {
        console.log('gagal :', error);
      },
    );
    // api.getEvent().then(
    //   res => console.log('berhasil', res.data),
    //   error => console.log('errores', error.message),
    // );
  };
  const onContinueSet = async () => {
    getData('user').then(res => {
      console.log('isi  data :', res);
    });

    await destroyData();
    getData('user').then(res => {
      console.log('isi  data :', res);
    });
  };
  const getEvent = () => {
    api.getEvent().then(
      res => console.log('berhasil', res.data),
      error => console.log('errores', error.message),
    );
  };
  return (
    <View>
      <Inputs
        title="Email"
        placeholder="Masukkan Email"
        value={form.email}
        onChangeText={value => setForm('email', value)}
      />
      <Inputs
        title="Password"
        placeholder="Masukkan Password"
        value={form.password}
        onChangeText={value => setForm('password', value)}
      />
      <Buttons status="primary" onPress={onContinue} title="Set" />
      <Buttons status="primary" onPress={onContinueSet} title="clear" />
      <Buttons status="primary" onPress={getEvent} title="Get Event" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
