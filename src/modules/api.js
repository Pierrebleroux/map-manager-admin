require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'

const url = 'http://localhost:6000'

export const api = (route) => ({
  get: () => fetch(url + route),
  post: (body) => fetch(url + route, {
    type: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': '' // Store and somehow retrieve user's token
    },
    credentials: true,
    body: JSON.stringify(body)
  })
})

export default api