import React, { Component } from 'react';
import PhotosContainer from './containers/PhotosContainer'
import RatingsContainer from './containers/RatingsContainer'
import Navbar from './components/Navbar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PhotosContainer />
        <RatingsContainer />
      </div>
    );
  }
}

export default App;
