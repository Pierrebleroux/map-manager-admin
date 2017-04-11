// ------------------------------------
// Constants
// ------------------------------------
export const SET_REDIRECT_URL = 'routing/SET_REDIRECT_URL';

// ------------------------------------
// Actions
// ------------------------------------
export const setRedirectUrl = (url) => ({
  type: SET_REDIRECT_URL, url
});

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_REDIRECT_URL]: (state, action) => ({...state, redirectUrl: state.url})
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};
export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
