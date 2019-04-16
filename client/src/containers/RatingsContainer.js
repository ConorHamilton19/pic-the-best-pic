import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhotos, fetchWinner } from '../actions/photoActions'


import Winner from '../components/Winner'
import Ratings from '../components/Ratings'


class RatingsContainer extends Component {

  componentDidMount() {
  if (this.props.photos.length === 0) {
    this.props.fetchPhotos()
    this.props.fetchWinner()
  }
}

  render(){
    return (
    <div>
      <div className="RatingsContainer">
        <h2>Voting Results:</h2>
        <Ratings photos={this.props.photos} />
      </div>
      <div className="OverallRatings">
      <h2>Last Weeks Winner:</h2>
        <Winner winner={this.props.winner} />
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {photos: state.photos,
          winner: state.winner}
}

export default connect(mapStateToProps, { fetchPhotos, fetchWinner }) (RatingsContainer)
