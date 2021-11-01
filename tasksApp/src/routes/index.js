import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import App from './app.tabs.routes';
import Auth from './sign.stack.routes';

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);
  return (
    <>
      <NavigationContainer>{signed ? <App /> : <Auth />}</NavigationContainer>
    </>
  );
}
