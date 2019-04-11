import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhotos } from '../actions/photoActions'

import Photos from '../components/Photos'


class PhotosContainer extends Component {

  componentDidMount() {
  if (this.props.photos.length === 0) {
    this.props.fetchPhotos()
  }
}

  render(){
    return (
      <div>
      <Photos photos={this.props.photos} />
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {photos: state.photos}
}

export default connect(mapStateToProps, { fetchPhotos }) (PhotosContainer)
