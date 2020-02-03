/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Image,StyleSheet,View,Text,StatusBar,Button} from 'react-native';

import {Header,Colors} from 'react-native/Libraries/NewAppScreen';
import Homepage from './src/Onboard/Homepage'

const App: () => React$Node = () => {
  return (
    <>
      <Homepage/>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
