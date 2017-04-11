import { connect } from 'react-redux';
import { setRedirectUrl } from '../../../modules/routing';
import React from 'react';

/**
 * An upper class component that checks if the user is properly signed in.
 */
class VerifyUserSignedIn extends React.Component {
  componentDidMount() {
    const { dispatch, currentURL, isSignedIn } = this.props;

    if (!isSignedIn) {
      dispatch(setRedirectUrl(currentURL));
      if (this.props.router) {
        this.props.router.push('/auth');
      }
    }
  }

  render() {
    if (this.props.isSignedIn) {
      return this.props.children;
    } else {
      return null;
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    isSignedIn: !!(state.auth && state.auth.user),
    currentURL: ownProps.location.pathname,
  };
}

export default connect(mapStateToProps)(VerifyUserSignedIn);
