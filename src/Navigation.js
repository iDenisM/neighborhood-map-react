import React, { Component } from 'react'
import './App.css'

export default class Navigation extends Component {

  toggleMarkersView = (viewMarkers) => {
    if (!viewMarkers) {
      let bounds = new window.google.maps.LatLngBounds()
      // Show the markers
      this.props.markers.map(marker => {
        marker.setMap(this.props.map)
        bounds.extend(marker.position)
      })
      this.props.map.fitBounds(bounds)
    } else {
      // Hide the markers
      this.props.markers.map(marker => {
        marker.setMap(null)
      })
    }
  }

  render() {
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
      onClick={() => {
        this.props.onToggleShowMarkers(viewMarkers.checked ? false : true)
        this.toggleMarkersView(viewMarkers.checked)
      }}
      ></span>
      </label>
      </div>
      </div>
    )
  }
}
