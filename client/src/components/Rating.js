import React, { Component } from 'react'
import ProgressBar from '../components/ProgressBar'

class Rating extends Component {


  render() {

    return(
      <div className="RatingCard">
        {this.props.photo.title}
        <ProgressBar percentage={this.props.photo.vote_count} />
      </div>
    )
  }
}

export default Rating
