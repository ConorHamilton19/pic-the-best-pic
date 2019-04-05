import React, { Component } from 'react'

class Photo extends Component {
  render() {
    return(
      <div>
        {this.props.photo.title}
      </div>
    )
  }
}

export default Photo
