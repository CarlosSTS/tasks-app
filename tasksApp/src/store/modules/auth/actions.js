export function signInRequest(name) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {name},
  };
}

export function signInSuccess(name) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {name},
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
