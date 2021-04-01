import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Chat, Berita, Akun, Alumni} from '../pages';
import {BottomNavigator} from '../components/moleculs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopNavigation = () => {
  return (
    <TopTab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CHat" component={Chat} />
    </TopTab.Navigator>
  );
};
const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Alumni" component={Alumni} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
};
const MainAppCollege = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
};
const MainAppGraduated = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Berita" component={Berita} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainAppCollege">
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
