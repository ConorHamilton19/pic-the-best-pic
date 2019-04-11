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
      <div className="RatingsContainer">
      <Ratings photos={this.props.photos} />
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {photos: state.photos}
}

export default connect(mapStateToProps, { fetchPhotos }) (RatingsContainer)
