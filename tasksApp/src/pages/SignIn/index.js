import React, {useCallback, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {Form} from '@unform/mobile';
import * as Yup from 'yup';

import {signInRequest} from '../../store/modules/auth/actions';
import getValidationErrors from '../../utils/getValidationErrors';

import Background from '../../components/Background';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {Container, Title} from './styles';

const SignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async ({name}) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .min(3, 'Minimo 3 digitos')
            .required('Campo obrigatório'),
        });

        await schema.validate(
          {name},
          {
            abortEarly: false,
          },
        );
        dispatch(signInRequest(name));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          // console.tron.log(errors);
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
              <Title>Faça seu login</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                autoCorrect={false}
                autoCapitalize="words"
                keyboardType="default"
                name="name"
                placeholder="Digite seu nome"
                icon="user"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current.submitForm()}
              />

              <View>
                <Button
                  onPress={() => formRef.current.submitForm()}
                  loading={loading}
                  icon="arrow-right">
                  {loading ? 'Acessando...' : 'Acessar'}
                </Button>
              </View>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
};

export default SignIn;
