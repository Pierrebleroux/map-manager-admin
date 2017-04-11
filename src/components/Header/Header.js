import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

export const Header = (props) => {
  const user = props.user.profileObj ?
    'User: ' + (props.user.profileObj && props.user.profileObj.email) : 'Not signed in';

  return (
    <div>
      <h1>Admin</h1>
      <IndexLink to='/' activeClassName='route--active'>
        Home
      </IndexLink>
      {' · '}
      <Link to='/admin' activeClassName='route--active'>
        Admin
      </Link>
      {' · '}
      <Link to='/auth' activeClassName='route--active'>
        Auth
      </Link>
      <div className='user'>
        {user}
      </div>

    </div>
  );
};

export default Header;
