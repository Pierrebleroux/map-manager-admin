import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = (props) => (
  <div>
    <h1>Admin</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    <div className='user'>
      User: {props.user.profileObj.email}
    </div>
  </div>
)

export default Header
