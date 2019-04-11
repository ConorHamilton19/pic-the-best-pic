import React, { Component } from 'react'

import Photo from './Photo'

class Ratings extends Component {


  render() {

    const ratings = this.props.photos.map(photo => <Photo key={photo.id} photo={photo}/>)


    return(
      <div className="Ratings">
      <ul>{ratings}</ul>
      </div>
    )
  }
}

export default Photos
