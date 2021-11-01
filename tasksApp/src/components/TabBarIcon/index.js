import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../common/colors';

const TabBarIcon = ({name, color, focused, size}) => {
  return (
    <MaterialIcons
      name={name}
      size={size}
      color={focused ? colors.white : color}
    />
  );
};

export default TabBarIcon;
