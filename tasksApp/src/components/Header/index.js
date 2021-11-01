import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import {
  Container,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
} from './styles';

const Header = () => {
  const userName = useSelector(state => state.user.name);
  const todoSize = useSelector(state => state.todo.todos.length);
  return (
    <>
      <Container>
        <View />
        <HeaderText>
          Total de
          <HeaderTextBold> {todoSize} </HeaderTextBold>
          tarefas
        </HeaderText>
      </Container>

      <Title>
        Bem-vindo,{'\n'}
        <HeaderTextBold>{userName}</HeaderTextBold>
      </Title>
      <Description>
        Escolha uma das tarefas abaixo para começar seu dia!
      </Description>
    </>
  );
};

export default Header;
