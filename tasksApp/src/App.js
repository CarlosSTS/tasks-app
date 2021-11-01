import 'react-native-gesture-handler';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import './config/reactotron';

import {colors} from './common/colors';
import Routes from './routes';

import {persistor, store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          backgroundColor={colors.statusbar}
          barStyle="light-content"
          translucent={false}
        />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
