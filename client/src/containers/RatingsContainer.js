import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWinner } from '../actions/photoActions'


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
      <h2>Last Weeks Winner:</h2>
         <Winner winner={this.props.winner} />
      </div>
      </div>
    )
  }

  render(){
    console.log(this.props.winner)
    return (
    <div>
      {this.state.loaded ? this.content() : null}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {photos: state.photos,
          winner: state.winner}
}

export default connect(mapStateToProps, { fetchWinner }) (RatingsContainer)
