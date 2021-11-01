import produce from 'immer';

const INITIAL_STATE = {
  todo: {
    title: '',
    description: '',
    owner: '',
    hours: '',
  },
  loading: false,
  todos: [],
  ownerTodos: [],
};

export default function todo(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@todo/TODO_ADD_REQUEST':
        draft.loading = true;
        break;

      case '@todo/TODO_SUCCESS': {
        draft.todo = action.payload.todo;
        draft.loading = false;
        break;
      }

      case '@todo/TODO_LOAD_REQUEST':
        draft.loading = true;
        break;

      case '@todo/TODO_LOAD_SUCCESS': {
        draft.todos = action.payload.todos;
        draft.loading = false;
        break;
      }

      case '@todo/TODO_SEARCH_OWNER_SUCCESS': {
        draft.ownerTodos = action.payload.ownerTodos;
        draft.loading = false;
        break;
      }

      case '@todo/TODO_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
