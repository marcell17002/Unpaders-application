import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Auth,
  CariAlumni,
  CariBerita,
  Splashscreen,
  Pengenalan,
  Masuk,
  Daftar,
  FormDaftar,
  Home,
  Chat,
  Berita,
  Lainnya,
  DetailBerita,
  KomentarPage,
  ProfilAlumni,
  ProfilPengguna,
  UbahProfile,
  TentangKami,
  Kontak,
  Disclaimer,
  TemukanAlumni,
  KetentuanKontributor,
  TulisBerita,
  BeritaUnggah,
  RuangObrolan,
  SubKategoriHome,
  UmumList,
  UmumLainnya,
  FilterPage,
  UbahPassword,
} from '../pages';
import {BottomNavigator} from '../components/moleculs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const MainApp = () => {
  //untuk umum
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List Alumni" component={UmumList} />
      <Tab.Screen name="Lainnya" component={UmumLainnya} />
    </Tab.Navigator>
  );
};
const MainAppCollege = () => {
  //buat mahasiswa
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profil" component={Lainnya} />
    </Tab.Navigator>
  );
};
const MainAppGraduated = () => {
  //buat alumni
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Berita" component={Berita} />
      <Tab.Screen name="Profil" component={Lainnya} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pengenalan"
        component={Pengenalan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Masuk"
        component={Masuk}
        options={{headerShown: false}}
      />
      {/* DAFTAR */}
      <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CariAlumni"
        component={CariAlumni}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CariBerita"
        component={CariBerita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FilterPage"
        component={FilterPage}
        options={{headerShown: false}}
      />
      {/* Alumni */}
      <Stack.Screen
        name="FormDaftar"
        component={FormDaftar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Berita"
        component={Berita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lainnya"
        component={Lainnya}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailBerita"
        component={DetailBerita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KomentarPage"
        component={KomentarPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilAlumni"
        component={ProfilAlumni}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilPengguna"
        component={ProfilPengguna}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UbahProfile"
        component={UbahProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TentangKami"
        component={TentangKami}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kontak"
        component={Kontak}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Disclaimer"
        component={Disclaimer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TemukanAlumni"
        component={TemukanAlumni}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KetentuanKontributor"
        component={KetentuanKontributor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TulisBerita"
        component={TulisBerita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BeritaUnggah"
        component={BeritaUnggah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RuangObrolan"
        component={RuangObrolan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SubKategoriHome"
        component={SubKategoriHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UbahPassword"
        component={UbahPassword}
        options={{headerShown: false}}
      />
      {/* Masyarakat Umum */}
      <Stack.Screen
        name="UmumList"
        component={UmumList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UmumLainnya"
        component={UmumLainnya}
        options={{headerShown: false}}
      />
      {/* Navigator */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainAppCollege"
        component={MainAppCollege}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainAppGraduated"
        component={MainAppGraduated}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
