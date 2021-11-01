import React, {useCallback, useRef, useState} from 'react';

import {View, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Form} from '@unform/mobile';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';
import InputMask from '../../components/InputMask';

import {Container, Title} from './styles';
import {todoUpRequest} from '../../store/modules/todo/actions';

const initialData = {
  title: '',
  description: '',
  owner: '',
  hours: '',
};

const TodoAdd = () => {
  const loading = useSelector(state => state.todo.loading);
  const [hours, setHours] = useState('');
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const titleInputRef = useRef(null);
  const descriptionInputRef = useRef(null);
  const hoursInputRef = useRef(null);

  const handleSubmit = useCallback(
    async ({owner, title, hours, description}, {reset}) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          owner: Yup.string().required('Campo obrigatório'),
          title: Yup.string().required('Campo obrigatório'),
          hours: Yup.string().required('Campo obrigatório'),
          description: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(
          {owner, title, hours, description},
          {
            abortEarly: false,
          },
        );
        dispatch(todoUpRequest(owner, title, hours, description));
        reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          //console.tron.log(errors);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [dispatch],
  );

  return (
    <Background>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <View>
              <Title>Cadastrar tarefa</Title>
            </View>
            <Form
              initialData={initialData}
              ref={formRef}
              onSubmit={handleSubmit}>
              <Input
                autoCorrect={false}
                autoCapitalize="words"
                keyboardType="default"
                name="owner"
                placeholder="Dono da tarefa"
                icon="user"
                returnKeyType="next"
                onSubmitEditing={() => titleInputRef.current.focus()}
              />
              <Input
                ref={titleInputRef}
                autoCorrect={false}
                autoCapitalize="sentences"
                keyboardType="default"
                name="title"
                placeholder="Titulo da tarefa"
                icon="check-circle"
                returnKeyType="next"
                onSubmitEditing={() => hoursInputRef.current.focus()}
              />
              <InputMask
                value={hours}
                mask="hours"
                inputMaskChange={text => setHours(text)}
                maxLength={5}
                ref={hoursInputRef}
                keyboardType="numeric"
                name="hours"
                placeholder="Horario de início ex: 00:00"
                icon="clock"
                returnKeyType="next"
                onSubmitEditing={() => descriptionInputRef.current.focus()}
              />
              <Input
                ref={descriptionInputRef}
                autoCorrect={false}
                autoCapitalize="sentences"
                keyboardType="default"
                name="description"
                placeholder="Descrição da tarefa"
                icon="clipboard"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current.submitForm()}
              />

              <View>
                <Button
                  onPress={() => formRef.current.submitForm()}
                  loading={loading}
                  icon="plus-circle">
                  {loading ? 'Adicionando...' : 'Adicionar'}
                </Button>
              </View>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default TodoAdd;
