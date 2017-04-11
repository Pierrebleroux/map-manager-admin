import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'auth',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Auth = require('./container/AuthContainer').default
      const reducer = require('./modules/auth').default

      injectReducer(store, { key: 'auth', reducer })

      /*  Return getComponent   */
      cb(null, Auth)

    /* Webpack named bundle   */
    }, 'auth')
  }
})
