import {Alert} from 'react-native';
import {takeLatest, call, put, all, delay} from 'redux-saga/effects';

import {signFailure, signInSuccess} from './actions';

export function* signIn({payload}) {
  try {
    const {name} = payload;

    if (!name) {
      Alert.alert('Erro', 'Informe seu nome');
    }
    yield delay(500);
    yield put(signInSuccess(name));
  } catch (err) {
    Alert.alert('Erro', 'Verifique seus dados e tente novamente');

    yield put(signFailure());
  }
}
export function signOut() {}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
