import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    points: [{
      lat: 40.719526, lng: -74.0089934
    }]
  }

  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 44.592301, lng: 11.051069},
      zoom: 13,
      mapTypeId: 'roadmap',
    })
    let marker = new window.google.maps.Marker({
      map: map,
      position: {lat: 44.592301, lng: 11.051069}
    })
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
