import React, { Component } from 'react'

export default class Map extends Component {

  componentDidMount() {
    const MAP = new window.google.maps.Map(document.getElementById('map'), this.props.mapInfo),
          largeInfoWindow = new window.google.maps.InfoWindow(),
          locations = this.props.locations
    let bounds = new window.google.maps.LatLngBounds(),
        markerCollector = []

    // Set the global map state
    this.props.setMap(MAP)
    // Create the markers collection
    Object.keys(locations).map(location => {
      // Create the location
      let newMarker = new window.google.maps.Marker({
        map: MAP,
        position: locations[location].position,
        title: locations[location].title,
        animation: window.google.maps.Animation.DROP,
        id: location
      })
      // Push the new location to the markers holder
      markerCollector.push(newMarker)
      // Extends the boundries of the map for each marker
      bounds.extend(locations[location].position)
      //Event lisners
      newMarker.addListener('click', () => this.populateInfoWindow(MAP, newMarker, largeInfoWindow))
      return location
    })

    // Push the markers collection to the markers state in App
    this.props.addMarkers(markerCollector)

    // Set the map to fit the bounds
    MAP.fitBounds(bounds)
  }

  // showMarkers = (map, bounds) => {
  //   if (this.props.showMarkers) {
  //     // Extends the map bounds for each marker and display it
  //     this.state.markers.map(marker => {
  //       marker.setMap(map)
  //       bounds.extend(marker.position)
  //     })
  //     map.fitBounds(bounds)
  //     console.log(`setting the map to map`);
  //   } else {
  //     this.state.markers.map(marker => {
  //       marker.setMap(null)
  //       console.log(`setting the map to null`);
  //     })
  //   }
  // }

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
