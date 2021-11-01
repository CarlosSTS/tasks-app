import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screenOptions from '../constants/screenOptions';

import HeaderRight from '../components/HeaderRight';
import TodoShare from '../components/TodoShare';
import Dashboard from '../pages/Dashboard';
import TodoDetail from '../pages/TodoDetail';

const {Navigator, Screen} = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={({route}) => ({
          title: 'Tarefas cadastradas',
          headerRight: () => <HeaderRight />,
        })}
      />

      <Screen
        name="TodoDetail"
        component={TodoDetail}
        options={({route}) => ({
          title: route.params.todo.title || 'Detalhe da tarefa',
          headerRight: () => <TodoShare />,
        })}
      />
    </Navigator>
  );
};

export default AppRoutes;
