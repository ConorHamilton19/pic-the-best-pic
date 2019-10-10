import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseVote, fetchPhotos, fetchWinner } from '../actions/photoActions'

class Photo extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.photo.vote_count += 1
    this.props.increaseVote(this.props.photo)
    .then(this.props.fetchPhotos())
    .then(this.props.fetchWinner())
  }

  render() {

    return(
      <div className="PhotoCard">

        {this.props.photo.title} by {this.props.photo.owner} <br></br>
      <button onClick={this.handleClick}> <img className="pic-tile" src={this.props.photo.picture.url} alt="pics"/> </button>
      </div>
    )
  }
}

export default connect(null, { increaseVote, fetchPhotos, fetchWinner }) (Photo)
