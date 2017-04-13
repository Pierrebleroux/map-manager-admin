require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

const url = 'http://localhost:6000';

export const REQUEST_ERROR = 'api/REQUEST_ERROR';
export const requestError = (status) => ({
  type: REQUEST_ERROR, status
});

export const callApi = (store, route, method) => ({
  get: () => fetch(url + route),
  post: (body) => fetch(url + route, {
    type: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '' // Store and somehow retrieve user's token
    },
    credentials: true,
    body: JSON.stringify(body)
  });
});

const apiMiddleware = store => next => action => {
  if (action.api && action.api.route && action.api.method) {
    let {route, method} = action.api;
    return callApi(store, route, method)
      .then((response) => {
        if (response.status >= 400) {
          store.dispatch()
        }
      })
      .then((result) => {

      })
  }
  return next(action);
};

export default apiMiddleware;