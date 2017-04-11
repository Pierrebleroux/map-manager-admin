import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

import { connect } from 'react-redux';

import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {

  componentDidUpdate(prevProps) {
    const { dispatch, redirectUrl } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      this.props.router.push(redirectUrl);
    } else if (isLoggingOut) {
      // do any kind of cleanup or post-logout redirection here
    }
  }

  render() {
    return (
      <div className='container text-center'>
        <Navbar />
        <Header />
        <div className='core-layout__viewport'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: !!(state.auth && state.auth.user),
    redirectUrl: state.redirectUrl,
  };
};

export default connect(mapStateToProps)(CoreLayout);
