import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {todoDeleteRequest} from '../../store/modules/todo/actions';
import Background from '../../components/Background';
import {colors} from '../../common/colors';

import {Container, Todo, TodoActions, TodoProperty, TodoValue} from './styles';

const TodoDetail = () => {
  const {todo} = useRoute().params;
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  function handleTodoDelete(_id) {
    dispatch(todoDeleteRequest(_id));
    goBack();
  }

  return (
    <Background>
      <Container>
        <Todo>
          <TodoActions>
            <Feather
              name="trash-2"
              size={32}
              color={colors.red}
              style={{}}
              onPress={() =>
                Alert.alert(
                  'Deletando...',
                  'Deseja realmente deletar ?',
                  [
                    {
                      text: 'Não 🙏🏻',
                      style: 'cancel',
                    },
                    {
                      text: 'Sim',
                      onPress: () => {
                        try {
                          handleTodoDelete({_id: todo._id});
                        } catch (err) {
                          Alert.alert('Erro', 'Tente novamente mais tarde');
                        }
                      },
                    },
                  ],
                  {
                    cancelable: false,
                  },
                )
              }
            />
          </TodoActions>

          <TodoProperty>DONO</TodoProperty>
          <TodoValue>{todo.owner}</TodoValue>

          <TodoProperty>TAREFA</TodoProperty>
          <TodoValue>{todo.title}</TodoValue>

          <TodoProperty>HORÁRIO</TodoProperty>
          <TodoValue>{todo.hours}</TodoValue>

          <TodoProperty>DESCRIÇÃO</TodoProperty>
          <TodoValue>{todo.description}</TodoValue>
        </Todo>
      </Container>
    </Background>
  );
};

export default TodoDetail;
