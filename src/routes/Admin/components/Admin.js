import React from 'react';
import ReactDOM from 'react-dom';

export const Admin = (props) => (
  <div className='panel'>
    Click on the button to generate a new map version.
    <button className='btn blue' onClick={() => props.sync()}>Sync</button>
  </div>
);

export default Admin;