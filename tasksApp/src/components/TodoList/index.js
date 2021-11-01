import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {Text} from 'react-native';
import {todoLoadRequest} from '../../store/modules/todo/actions';

import {colors} from '../../common/colors';

import {
  TodoListView,
  Todo,
  ListEmptyComponent,
  TodoValue,
  TodoProperty,
  ButtonDetail,
  ButtonDetailText,
} from './styles';

const TodoList = ({data = [], label = ''}) => {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  function navigateToDetail(todo) {
    navigate('TodoDetail', {todo});
  }

  useEffect(() => {
    if (isFocused) {
      dispatch(todoLoadRequest());
    }
  }, [isFocused, dispatch]);

  return (
    <TodoListView
      data={data}
      keyExtractor={todo => String(todo._id)}
      numColumns={1}
      horizontal={false}
      onEndReached={() => {} /*paginação*/}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.2}
      ListFooterComponent={() => <Text /> /* Parte inferior*/}
      ListFooterComponentStyle={() => <Text /> /*styles*/}
      ListEmptyComponent={
        <Todo>
          <ListEmptyComponent>{label}</ListEmptyComponent>
        </Todo>
      }
      ListHeaderComponent={() => <Text /> /*Parte superior */}
      ListHeaderComponentStyle={() => <Text /> /* styles*/}
      renderItem={({item: todo}) => (
        <Todo>
          <TodoProperty>DONO</TodoProperty>
          <TodoValue>{todo.owner}</TodoValue>

          <TodoProperty>TAREFA</TodoProperty>
          <TodoValue>{todo.title}</TodoValue>

          {/* <TodoProperty>DESCRIÇÃO</TodoProperty>
          <TodoValue>{todo.description}</TodoValue>*/}

          <ButtonDetail onPress={() => navigateToDetail(todo)}>
            <ButtonDetailText>Ver mais detalhes </ButtonDetailText>
            <Feather
              name="arrow-right"
              size={24}
              color={colors.blue}
              style={{}}
            />
          </ButtonDetail>
        </Todo>
      )}
    />
  );
};

export default TodoList;
