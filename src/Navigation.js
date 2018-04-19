import React from 'react'
import './App.css'

function Navigation(props) {
  const viewMarkers = document.getElementById('view-markers')
  return(
    <div
      id='draw-nav'
      className='nav-list'
    >
      <div id='hide-markers' className='nav-item'>
        <span>view markers</span>

        {/* Create the switch button */}
        <label
          id='click-view-markers' className='switch'
        >
          <input id='view-markers' type='checkbox' defaultChecked></input>
          <span
            className='slider round'
            onClick={() => props.onToggleShowMarkers(viewMarkers.checked ? false : true)}
          ></span>
        </label>
      </div>
    </div>
  )
}

export default Navigation
