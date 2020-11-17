import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Router from './Router';

import LoadAssets from './src/utils/loadAssets';

import { fonts } from './src/utils/fonts'

const assets = [];

const App = () => {
  return (
    <LoadAssets {...{fonts:fonts, assets:assets}}>
      <Router></Router>
    </LoadAssets>
  );
}

export default App;