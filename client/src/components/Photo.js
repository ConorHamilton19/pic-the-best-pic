import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseVote, fetchPhotos } from '../actions/photoActions'

class Photo extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.photo.vote_count += 1
    this.props.increaseVote(this.props.photo)
    .then(this.props.fetchPhotos())
  }

  render() {

    return(
      <div className="PhotoCard">
        {this.props.photo.title} <br></br>
        <button onClick={this.handleClick}> Vote </button>
      </div>
    )
  }
}

export default connect(null, { increaseVote, fetchPhotos }) (Photo)
