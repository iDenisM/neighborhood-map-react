import React, { Component } from 'react';
import Map from './Map'
import Navigation from './Navigation'
import { base } from './base'
import './App.css'

export default class App extends Component {
  state = {
    mapInfo: {
      center: {lat: 44.592301, lng: 11.051069},
      zoom: 12,
      mapTypeId: 'roadmap'
    },
    map: {},
    locations: {},
    markers: [],
    showMarkers: true
  }

  componentDidMount() {
    // Fetch the database
    const rootRef = base.database().ref().child('locations')
    rootRef.on('value', location => {
      this.setState({ locations: location.val() })
    })
  }

  toggleShowMarkers = (condition) => {
    this.setState({ showMarkers: condition })
  }

  // Set the markers state
  addMarkers = (markers) => {
    this.setState({ markers: [...this.state.markers, ...markers] })
  }

  // Set the map
  setMap = (newMap) => {
    this.setState({ map: newMap})
  }

  render() {
    return (
      <div className="app">
        <div className='container'>
        {/*The navigation control menu*/}
        <Navigation
          onToggleShowMarkers={this.toggleShowMarkers}
          markers={this.state.markers}
          map={this.state.map}
        />
        {/*The header part of the app structure*/}
          <header className='header'>
            <nav className='main-nav'>
              <div className='main-nav-left'>
                <a
                  id='burger'
                  className='toggle-nav-menu hambuger-icon'
                  onClick={() => document.getElementById('draw-nav').classList.toggle('open')}
                >
                  <span className='lines'></span>
                </a>
              </div>
              <div className='main-nav-center'></div>
              <div className='main-nav-right'></div>
            </nav>
          </header>
          {/*The main part of the app structure*/}
          <main className='main'>
            {
              Object.keys(this.state.locations).length > 0 ? (
                <Map
                  mapInfo={this.state.mapInfo}
                  locations={this.state.locations}
                  showMarkers={this.state.showMarkers}
                  markers={this.state.markers}
                  addMarkers={this.addMarkers}
                  setMap={this.setMap}
                />
              ) : (
                <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
                  <circle id="loading-inner" cx="75" cy="75" r="60"/>
                </svg>
              )
            }

          </main>
          {/*The footer part of the app structure*/}
          <footer className='footer'>

          </footer>
        </div>
      </div>
    )
  }
}
