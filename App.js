import 'react-native-gesture-handler';

import {decode, encode} from 'base-64';
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

import React from 'react';

import MainNavigator from './src/Navigator/MainNavigator';

const App: () => React$Node = () => {
  return <MainNavigator />;
};

export default App;
