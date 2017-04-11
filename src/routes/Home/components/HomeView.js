import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = (props) => (
  <div>
    <div className='panel'>
      Click on the button to generate a new map version.
      <button className='btn blue' onClick={() => props.sync()}>Sync</button>
    </div>
  </div>
)

export default HomeView
