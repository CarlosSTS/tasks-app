import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const {Navigator, Screen} = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};

export default AppRoutes;
