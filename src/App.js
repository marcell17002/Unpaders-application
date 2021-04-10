import React, {useState, useEffect} from 'react';
import Router from './router';
import {StyleSheet, Text, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
