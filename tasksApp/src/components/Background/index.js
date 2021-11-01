import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../common/colors';

const Background = ({children}) => {
  const {backgroundInitial, backgroundFinal} = colors;

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[backgroundInitial, backgroundFinal]}>
      {children}
    </LinearGradient>
  );
};

export default Background;
