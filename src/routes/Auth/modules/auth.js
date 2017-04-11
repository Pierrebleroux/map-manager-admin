import api from '../../../modules/api'

// ------------------------------------
// Constants
// ------------------------------------
export const SAVE_USER_AUTH = 'SAVE_USER_AUTH'

// ------------------------------------
// Actions
// ------------------------------------
export const saveUserAuth = (user) => {
  return {
    type: SAVE_USER_AUTH,
    user
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SAVE_USER_AUTH]: (state, action) => ({...state, user: action.user})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
