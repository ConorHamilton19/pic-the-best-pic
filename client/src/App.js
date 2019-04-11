import React, { Component } from 'react';
import PhotosContainer from './containers/PhotosContainer'
import RatingsContainer from './containers/RatingsContainer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PhotosContainer />
        <RatingsContainer />
      </div>
    );
  }
}

export default App;
