import React, { Component } from 'react';
import Map from './Map'
import Navigation from './Navigation'
import { base } from './base'
import './App.css'

export default class App extends Component {
  state = {
    map: {
      center: {lat: 44.592301, lng: 11.051069},
      zoom: 12,
      mapTypeId: 'roadmap'
    },
    locations: {}
    // {
    //   title: 'My Home',
    //   position: {lat: 44.592301, lng: 11.051069}
    // },
    // {
    //   title: 'Coop Super Market',
    //   position: {lat: 44.593414, lng: 11.050536}
    // },
    // {
    //   title: 'Teatro Dada',
    //   position: {lat: 44.5917125, lng: 11.0523466}
    // }
  }

  componentDidMount() {
    // Fetch the database
    const rootRef = base.database().ref().child('locations')
    rootRef.on('value', location => {
      let locations = location.val()
      this.setState({ locations })
      // Object.keys(locations).map(id => {
      //   let newLocation = {
      //     id: id,
      //     title: locations[id].title,
      //     position: {
      //       lat: locations[id].position.lat,
      //       lng: locations[id].position.lng
      //     }
      //   }
      //   let addLocation = [...this.state.locations, newLocation]
      //   // this.setState({ locs: newLocation })
      //   return id
      // })
    })
  }

  render() {
    return (
      <div className="app">
      {/* The next div is for debuggin purpose */}
      <div>
        {
          Object.keys(this.state.locations).length > 0 ? (
            Object.keys(this.state.locations).map(location => (
              <p>{location}</p>
            ))
          ) : (
            <p>undefined</p>
          )
        }
      </div>
        <div className='container'>
        {/*The navigation control menu*/}
        <Navigation/>
        {/*The header part of the app structure*/}
          <header className='header'>
            <nav className='main-nav'>
              <div className='main-nav-left'>
                <a
                  id='burger'
                  className='toggle-nav-menu hambuger-icon'
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
            <Map
              map={this.state.map}
              locations={this.state.locations}
            />
          </main>
          {/*The footer part of the app structure*/}
          <footer className='footer'>

          </footer>
        </div>
      </div>
    )
  }
}
