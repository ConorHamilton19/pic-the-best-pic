import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseVote } from '../actions/photoActions'

class Photo extends Component {

  handleClick = (e) => {
    e.preventDefault()
    this.props.increaseVote(this.props.photo.id)
  }

  render() {

    return(
      <div className="PhotoCard">
        {this.props.photo.title} <br></br>
        {this.props.photo.vote_count}<br></br>
        <button onClick={this.handleClick}> Vote </button>
      </div>
    )
  }
}

export default connect(null, { increaseVote }) (Photo)
