import { connect } from 'react-redux';

import Header from './Header';

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  user: state.auth && state.auth.user || {}
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
