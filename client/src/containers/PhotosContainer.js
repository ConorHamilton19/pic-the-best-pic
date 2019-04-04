import React, { Component } from 'react'

import Photos from '../components/Photos'


class PhotosContainer extends Component {

  state = {
    photo: ""
  }
  render(){
    return (
      <div>
      <Photos photo={this.state.photo}/>
      </div>

    )
  }
}

export default PhotosContainer
