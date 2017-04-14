import api from '../../../modules/api';

// ------------------------------------
// Constants
// ------------------------------------
export const SYNC_SPREAD_SHEET = 'admin/SYNC_SPREAD_SHEET';

// ------------------------------------
// Actions
// ------------------------------------
export const syncSpreadSheet = (spreadsheetName) => ({
  type: SYNC_SPREAD_SHEET,
  api: {
    route: '/sync',
    method: 'POST',
    body: {name: spreadsheetName}
  }
});

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SYNC_SPREAD_SHEET]: (state, action) => { console.log('syncing spreadsheet'); return state; }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
