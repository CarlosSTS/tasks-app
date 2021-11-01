import React, {useCallback, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import {Form} from '@unform/mobile';
import * as Yup from 'yup';

import {todoSearchOwnerRequest} from '../../store/modules/todo/actions';
import getValidationErrors from '../../utils/getValidationErrors';

import Background from '../../components/Background';
import TodoList from '../../components/TodoList';
import Button from '../../components/Button';

import {Container, Title} from './styles';
import Input from '../../components/Input';

const initialData = {
  owner: '',
};

const TodoSearch = () => {
  const dispatch = useDispatch();
  const ownerTodos = useSelector(state => state.todo.ownerTodos);

  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async ({owner}, {reset}) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          owner: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(
          {owner},
          {
            abortEarly: false,
          },
        );
        dispatch(todoSearchOwnerRequest(owner));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          // console.tron.log(errors);
          formRef.current?.setErrors(errors);
          return;
        }
      }
      reset();
    },
    [dispatch],
  );

  return (
    <Background>
      <Container>
        <View>
          <Title>Pesqusar por dono da tarefa.</Title>
        </View>
        <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
          <Input
            autoCorrect={false}
            autoCapitalize="words"
            keyboardType="default"
            name="owner"
            placeholder="Dono da tarefa"
            icon="user"
            returnKeyType="send"
            onSubmitEditing={() => formRef.current.submitForm()}
          />

          <View>
            <Button onPress={() => formRef.current.submitForm()} icon="search">
              Pesquisar
            </Button>
          </View>
        </Form>
        <TodoList
          data={ownerTodos}
          label="Esse usuário ainda não possui tarefas!"
        />
      </Container>
    </Background>
  );
};

export default TodoSearch;
