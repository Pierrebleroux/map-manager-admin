import { connect } from 'react-redux'

import Auth from '../components/Auth'
import {saveUserAuth} from '../modules/auth'

const mapDispatchToProps = {
  saveUserAuth: saveUserAuth
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
