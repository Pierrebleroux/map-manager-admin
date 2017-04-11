import api from '../../../modules/api'

// ------------------------------------
// Constants
// ------------------------------------
export const SYNC_SPREAD_SHEET = 'SYNC_SPREAD_SHEET'

// ------------------------------------
// Actions
// ------------------------------------
export const syncSpreadSheet = () => {}

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
