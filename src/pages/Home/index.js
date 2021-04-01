import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';
import {Buttons, Inputs} from '../../components/atoms';
import {Headers} from '../../components/moleculs';

const Home = () => {
  return (
    <View>
      <Headers type="sub-main" title="hello" />
      <Buttons status="tertiary" title="Daftar" />
      <Inputs title="Hello" placeholder="asda" />
      <Inputs title="Hello" placeholder="asda" />
      <Inputs title="Hello" placeholder="asda" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
