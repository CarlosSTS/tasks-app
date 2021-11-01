export function todoUpRequest(owner, title, hours, description) {
  return {
    type: '@todo/TODO_ADD_REQUEST',
    payload: {title, description, owner, hours},
  };
}

export function todoSuccess(todo) {
  return {
    type: '@todo/TODO_SUCCESS',
    payload: {todo},
  };
}

export function todoLoadRequest() {
  return {
    type: '@todo/TODO_LOAD_REQUEST',
  };
}

export function todoLoadSuccess(todos) {
  return {
    type: '@todo/TODO_LOAD_SUCCESS',
    payload: {todos},
  };
}

export function todoDeleteRequest(_id) {
  return {
    type: '@todo/TODO_DELETE_REQUEST',
    payload: _id,
  };
}
export function todoSearchOwnerRequest(owner) {
  return {
    type: '@todo/TODO_SEARCH_OWNER_REQUEST',
    payload: {owner},
  };
}

export function todoSearchOwnerRequestSuccess(ownerTodos) {
  return {
    type: '@todo/TODO_SEARCH_OWNER_SUCCESS',
    payload: {ownerTodos},
  };
}

export function todoFailure() {
  return {
    type: '@todo/TODO_FAILURE',
  };
}
