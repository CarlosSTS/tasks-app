import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '../../../services/api';

import {
  todoSuccess,
  todoDeleteRequest,
  todoLoadSuccess,
  todoFailure,
  todoSearchOwnerRequestSuccess,
} from './actions';

export function* todoCreate({payload}) {
  try {
    const {owner, title, hours, description} = payload;

    const response = yield call(api.post, 'todos', {
      owner,
      title,
      hours,
      description,
    });
    const {todo} = response.data;
    yield put(todoSuccess(todo));
  } catch (err) {
    Alert.alert('Erro', 'Verifique seus dados e tente novamente');
    yield put(todoFailure());
  }
}

export function* todoLoad({}) {
  try {
    const response = yield call(api.get, '/todos', {});
    const todos = response.data;
    yield put(todoLoadSuccess(todos));
    //  console.tron.log('@TODOS', todos);
  } catch (err) {
    Alert.alert('Erro', 'Ao carregar as tarefas!');
    yield put(todoFailure());
  }
}

export function* todoSearchOwner({payload}) {
  try {
    const {owner} = payload;

    const response = yield call(api.get, `/todos/${owner}`, {});
    const ownerTodos = response.data;
    yield put(todoSearchOwnerRequestSuccess(ownerTodos));
  } catch (err) {
    Alert.alert('Erro', 'Ao pesquisar dono!');
    yield put(todoFailure());
  }
}

export function* todoDelete({payload}) {
  const {_id} = payload;
  // console.tron.log('@ID', _id);
  try {
    yield call(api.delete, `/todos/${_id}`);

    yield put(todoDeleteRequest(_id));
  } catch (err) {
    Alert.alert('Erro', 'Ao deletar tarefa!');
    yield put(todoFailure());
  }
}

export default all([
  takeLatest('@todo/TODO_ADD_REQUEST', todoCreate),
  takeLatest('@todo/TODO_LOAD_REQUEST', todoLoad),
  takeLatest('@todo/TODO_SEARCH_OWNER_REQUEST', todoSearchOwner),
  takeLatest('@todo/TODO_DELETE_REQUEST', todoDelete),
]);
