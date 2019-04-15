import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhotos } from '../actions/photoActions'



import Ratings from '../components/Ratings'


class RatingsContainer extends Component {

  componentDidMount() {
  if (this.props.photos.length === 0) {
    this.props.fetchPhotos()
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
      </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {photos: state.photos}
}

export default connect(mapStateToProps, { fetchPhotos }) (RatingsContainer)
