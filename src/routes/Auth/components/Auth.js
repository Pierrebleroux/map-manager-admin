import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
};

export const Auth = (props) => (
  <div className='panel round medium'>

    <h4>Sign in with your <br /> Google account.</h4>
    <GoogleLogin
      clientId="10936674452-36m73f815he4v5077sm7hjajfq0v5ljl.apps.googleusercontent.com"
      buttonText="Login with Google"
      scope="profile email https://www.googleapis.com/auth/spreadsheets.readonly"
      onSuccess={(res) => props.saveUserAuth(res)}
      onFailure={responseGoogle}
    />
  </div>
);

export default Auth;
