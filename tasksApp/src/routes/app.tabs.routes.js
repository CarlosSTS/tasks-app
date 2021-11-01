import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import {colors} from '../common/colors';
import {fonts} from '../common/fonts';

import tabBarOptions from '../constants/tabBarOptions';
import TabBarIcon from '../components/TabBarIcon';

import Dashboard from './dashboard.stack.routes';
import TodoSearch from '../pages/TodoSearch';
import TodoAdd from '../pages/TodoAdd';

const {Navigator, Screen} = createBottomTabNavigator();

export default function AppTabRoutes() {
  const todoSize = useSelector(state => state.todo.todos.length);
  return (
    <Navigator tabBarOptions={tabBarOptions}>
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarBadge: todoSize || 0,
          tabBarBadgeStyle: {
            color: colors.red,
            backgroundColor: colors.white,
            fontFamily: fonts.RobotoRegular,
          },
          tabBarIcon: ({color, size}) => (
            <TabBarIcon name="event" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="TodoSearch"
        component={TodoSearch}
        options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: ({color, size}) => (
            <TabBarIcon name="search" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="TodoAdd"
        component={TodoAdd}
        options={({route}) => ({
          tabBarLabel: 'Cadastrar',
          tabBarIcon: ({color, size}) => (
            <TabBarIcon name="add-task" color={color} size={size} />
          ),
        })}
      />
    </Navigator>
  );
}
