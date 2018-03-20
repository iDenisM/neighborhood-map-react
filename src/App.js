import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    map: {
      center: {lat: 44.592301, lng: 11.051069},
      zoom: 16,
      mapTypeId: 'roadmap',
    },
    locations: [{
      title: 'My Home',
      position: {lat: 44.592301, lng: 11.051069}
    },
    {
      title: 'Coop Super Market',
      position: {lat: 44.593414, lng: 11.050536}
    }],
    markers: []
  }

  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), this.state.map),
        largeInfoWindow = new window.google.maps.InfoWindow()

    this.state.locations.map((location, index) => {
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
      //Event lisners
      newMarker.addListener('click', () => this.populateInfoWindow(map, newMarker, largeInfoWindow))
      return location
    })
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
      <div className="app">
        {/*The header part of the app structure*/}
        <header className="header">
          <nav className='main-nav'>
            <div className='main-nav-left'>
              <a className='toggle-nav-menu hambuger-icon'>
                <span className='lines'></span>
              </a>
            </div>
            <div className='main-nav-center'></div>
            <div className='main-nav-right'></div>
          </nav>
        </header>
        {/*The main part of the app structure*/}
        <main className='main'>
          <div id='map'></div>
        </main>
        {/*The footer part of the app structure*/}
        <footer className='footer'>

        </footer>
      </div>
    );
  }
}
