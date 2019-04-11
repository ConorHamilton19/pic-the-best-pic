import React, { Component } from 'react'

class Rating extends Component {


  render() {

    return(
      <div className="RatingCard">
        {this.props.photo.title}
        {this.props.photo.vote_count}<br></br>

      </div>
    )
  }
}

export default Rating
