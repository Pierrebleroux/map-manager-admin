import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'admin',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Admin = require('./container/AdminContainer').default
      const reducer = require('./modules/admin').default

      injectReducer(store, { key: 'admin', reducer })

      cb(null, Admin);
    }, 'admin');
  }
});
