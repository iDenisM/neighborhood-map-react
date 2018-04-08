import React, { Component } from 'react'
import './App.css'

export default class Navigation extends Component {
  componentDidMount() {
    const burger = document.getElementById('burger'),
          navigationMenu = document.getElementById('draw-nav'),
          viewMarkers = document.getElementById('view-markers'),
          clickViewMarkers = document.getElementById('click-view-markers')

    burger.addEventListener('click', () => {
      navigationMenu.classList.toggle('open')
    })
    clickViewMarkers.addEventListener('click', () => {
      viewMarkers.checked ? viewMarkers.checked = false : viewMarkers.checked = true
    })
  }

  render() {
    return(
      <div
        id='draw-nav'
        className='nav-list'
      >
        <div
          id='hide-markers'
          className='nav-item'
        >
        <span>view markers</span>

          {/* Create the switch button */}
          <label id='click-view-markers' class='switch'>
            <input id='view-markers' type='checkbox' checked></input>
            <span class='slider round'></span>
          </label>
        </div>
      </div>
    )
  }
}
