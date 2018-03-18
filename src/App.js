import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        {/*The header part of the app structure*/}
        <header className="header">
          <nav className='main-nav'>
            <div className='main-nav-left'></div>
            <div className='main-nav-center'></div>
            <div className='main-nav-right'></div>
          </nav>
        </header>
        {/*The main part of the app structure*/}
        <main className='main'>

        </main>
        {/*The footer part of the app structure*/}
        <footer className='footer'>

        </footer>
      </div>
    );
  }
}

export default App;
