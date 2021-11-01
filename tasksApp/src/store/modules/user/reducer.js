import produce from 'immer';

const INITIAL_STATE = {
  name: '',
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.name = action.payload.name;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.name = '';
        break;
      }
      default:
        return state;
    }
  });
}
