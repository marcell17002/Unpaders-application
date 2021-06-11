import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Chat,
  Berita,
  Akun,
  Auth,
  SearchAlumni,
  SearchPage,
  Splashscreen,
  Intro,
  Masuk,
  Daftar,
  AlumniDaftar,
  AlumniHome,
  AlumniChat,
  AlumniBerita,
  AlumniLainnya,
  AlumniDetailBerita,
  AlumniKomentar,
  AlumniProfileAuthor,
  AlumniProfileUser,
  AlumniEditProfile,
  AlumniTentangKami,
  AlumniKontak,
  AlumniDisclaimer,
  AlumniList,
  AlumniKontrib,
  AlumniTulisBerita,
  AlumniBeritaUnggah,
  AlumniChatting,
  AlumniSubCategory,
  MahasiswaDaftar,
  MhsChat,
  MhsHome,
  MhsLainnya,
  MhsDetailBerita,
  MhsKomentar,
  MhsProfileAuthor,
  MhsProfileUser,
  MhsEditProfile,
  MhsTentangKami,
  MhsKontak,
  MhsDisclaimer,
  MhsListAlumni,
  MhsChatting,
  UmumList,
  UmumLainnya,
  UmumHome,
  UmumDetailBerita,
  UmumKomentar,
  UmumProfileAuthor,
  UmumTentangKami,
  UmumKontak,
  UmumDisclaimer,
  AlumniFilter,
} from '../pages';
import {
  ABottomNavigator,
  MBottomNavigator,
  UBottomNavigator,
} from '../components/moleculs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const MainApp = () => {
  //untuk umum
  return (
    <Tab.Navigator tabBar={props => <UBottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={AlumniHome} />
      <Tab.Screen name="List Alumni" component={UmumList} />
      <Tab.Screen name="Lainnya" component={UmumLainnya} />
    </Tab.Navigator>
  );
};
const MainAppCollege = () => {
  //buat mahasiswa
  return (
    <Tab.Navigator tabBar={props => <MBottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={AlumniHome} />
      <Tab.Screen name="Chat" component={AlumniChat} />
      <Tab.Screen name="Lainnya" component={AlumniLainnya} />
    </Tab.Navigator>
  );
};
const MainAppGraduated = () => {
  //buat alumni
  return (
    <Tab.Navigator tabBar={props => <ABottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={AlumniHome} />
      <Tab.Screen name="Chat" component={AlumniChat} />
      <Tab.Screen name="Berita" component={AlumniBerita} />
      <Tab.Screen name="Lainnya" component={AlumniLainnya} />
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
        name="Intro"
        component={Intro}
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
        name="SearchAlumni"
        component={SearchAlumni}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniFilter"
        component={AlumniFilter}
        options={{headerShown: false}}
      />
      {/* Alumni */}
      <Stack.Screen
        name="AlumniDaftar"
        component={AlumniDaftar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniHome"
        component={AlumniHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniChat"
        component={AlumniChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniBerita"
        component={AlumniBerita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniLainnya"
        component={AlumniLainnya}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniDetailBerita"
        component={AlumniDetailBerita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniKomentar"
        component={AlumniKomentar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniProfileAuthor"
        component={AlumniProfileAuthor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniProfileUser"
        component={AlumniProfileUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniEditProfile"
        component={AlumniEditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniTentangKami"
        component={AlumniTentangKami}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniKontak"
        component={AlumniKontak}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniDisclaimer"
        component={AlumniDisclaimer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniList"
        component={AlumniList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniKontrib"
        component={AlumniKontrib}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniTulisBerita"
        component={AlumniTulisBerita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniBeritaUnggah"
        component={AlumniBeritaUnggah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniChatting"
        component={AlumniChatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AlumniSubCategory"
        component={AlumniSubCategory}
        options={{headerShown: false}}
      />
      {/* Mahasiswa */}
      <Stack.Screen
        name="MahasiswaDaftar"
        component={MahasiswaDaftar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsHome"
        component={MhsHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsChat"
        component={MhsChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsLainnya"
        component={MhsLainnya}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDetailBerita"
        component={MhsDetailBerita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsKomentar"
        component={MhsKomentar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsProfileAuthor"
        component={MhsProfileAuthor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsProfileUser"
        component={MhsProfileUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsEditProfile"
        component={MhsEditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsTentangKami"
        component={MhsTentangKami}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsKontak"
        component={MhsKontak}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsDisclaimer"
        component={MhsDisclaimer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsListAlumni"
        component={MhsListAlumni}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MhsChatting"
        component={MhsChatting}
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
      <Stack.Screen
        name="UmumHome"
        component={UmumHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UmumDetailBerita"
        component={UmumDetailBerita}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UmumKomentar"
        component={UmumKomentar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UmumProfileAuthor"
        component={UmumProfileAuthor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UmumTentangKami"
        component={UmumTentangKami}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UmumKontak"
        component={UmumKontak}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UmumDisclaimer"
        component={UmumDisclaimer}
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
