import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';

import './config/ReactotronConfig';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#832a9a" />
    <Routes />
  </>
);

export default App;
