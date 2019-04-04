import React, { Component } from 'react'

import Photo from './Photo'

class Photos extends Component {
  render() {

    const photos = this.props.photos.map(photo => <Photo key={photo.id} photo={photo}/>)

    return(
      <div className="photos">
        { photos }
      </div>
    )
  }
}

export default Photos