import React, { Component } from 'react'

export default class Map extends Component {
  state = {
    markers: []
  }

  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), this.props.map),
        largeInfoWindow = new window.google.maps.InfoWindow(),
        bounds = new window.google.maps.LatLngBounds()

    this.props.locations.map((location, index) => {
      // Create the location
      let newMarker = new window.google.maps.Marker({
        map: map,
        position: location.position,
        title: location.title,
        animation: window.google.maps.Animation.DROP,
        id: index
      })
      // Push the new location to the markers holder
      this.setState((prevState) => {
        markers: [...prevState.markers, newMarker]
      })
      // Eztends the boundries of the map for each marker
      bounds.extend(location.position)
      //Event lisners
      newMarker.addListener('click', () => this.populateInfoWindow(map, newMarker, largeInfoWindow))
      return location
    })
    map.fitBounds(bounds)
  }

  populateInfoWindow = (map, marker, infoWindow) => {
    // Check if on this maker the info window isn't opened
    if (infoWindow.marker !== marker) {
      infoWindow.marker = marker
      infoWindow.setContent(`<div>${marker.title}</div>`)
      infoWindow.open(map, marker)
      // Clear the marker if window is closed
      infoWindow.addListener('closeClick', () => infoWindow.setMarker(null))
    }
  }

  render() {
    return (
      <div id='map'></div>
    )
  }
}
