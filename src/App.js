import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        {/*The header part of the app structure*/}
        <header className="header">
          <nav class='main-nav'>
            <div class='main-nav-header'>
              <div class='main-nav-header-left'></div>
              <div class='main-nav-header-center'></div>
              <div class='main-nav-header-right'></div>
            </div>
          </nav>
        </header>
        {/*The main part of the app structure*/}
        <main class='main'>

        </main>
        {/*The footer part of the app structure*/}
        <footer class='footer'>

        </footer>
      </div>
    );
  }
}

export default App;
