import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWinner } from '../actions/photoActions'
import { Link } from 'react-router-dom'

import Winner from '../components/Winner'
import Ratings from '../components/Ratings'

class RatingsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  async componentDidMount() {
      await this.props.fetchWinner()
      this.setState({loaded: true})
    }

  content() {
    return(
      <div>
      <div className="RatingsContainer">
        <h2>Voting Results:</h2>
        <Ratings photos={this.props.photos} />
      </div>
      <div className="OverallRatings">
      <h2>Most Recent Winner:</h2>
         <Winner winners={this.props.winners} />
         <p><Link to="/winners">List of All Winners</Link></p>
      </div>
      </div>
    )
  }

  render(){
    return (
    <div>
      {this.state.loaded ? this.content() : null}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {photos: state.photos,
          winners: state.winners}
}

export default connect(mapStateToProps, { fetchWinner }) (RatingsContainer)
