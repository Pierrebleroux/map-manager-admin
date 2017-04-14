import { connect } from 'react-redux';

import Admin from '../components/Admin';
import { syncSpreadSheet } from '../modules/admin';

const mapDispatchToProps = {
  sync: syncSpreadSheet
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
