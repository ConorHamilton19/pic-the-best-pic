import React, { Component } from 'react'

import Rating from './Rating'

class Ratings extends Component {


  render() {

    const ratings = this.props.photos.map(photo => <Rating key={photo.id} photo={photo}/>)


    return(
      <div className="Ratings">
      <ul>{ratings}</ul>
      </div>
    )
  }
}

export default Ratings
