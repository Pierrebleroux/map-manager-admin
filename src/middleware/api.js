require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

const url = 'http://localhost:8080';

export const callApi = (state, route, method) => ({
  get: () => fetch(url + route),
  post: (body) => fetch(url + route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': state.auth.user.getAuthResponse().id_token,
    },
    credentials: true,
    body: JSON.stringify(body),
  }),
});

const apiMiddleware = store => next => action => {
  if (action.api && action.api.route && action.api.method) {
    let state = store.getState();
    console.log(state);
    let {route, method, body} = action.api;
    return callApi(state, route)[method.toLowerCase()](body)
      .then((response) => {
        if (response.status >= 400) {
          // TODO: store.dispatch(apiError(response));
        }
        return response.json();
      })
      .then((result) => {
        return next({...action, result});
      });
  }
  return next(action);
};

export default apiMiddleware;