import React from 'react';
import {useSelector} from 'react-redux';

import Background from '../../components/Background';
import Header from '../../components/Header';
import TodoList from '../../components/TodoList';

import {Container} from './styles';

const Dashboard = () => {
  const todos = useSelector(state => state.todo.todos);

  return (
    <Background>
      <Container>
        <Header />
        <TodoList
          data={todos}
          label="Você ainda não adicionou nenhuma tarefa!"
        />
      </Container>
    </Background>
  );
};

export default Dashboard;
