import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWinner } from '../actions/photoActions'

class Winners extends Component {


  async componentDidMount() {
      this.props.fetchWinner()
    }


  render(){

      const Wins = this.props.winners.map((winner, index) => (<li key={index}> <img className="picwins-tile" src={winner.picture.url} alt="pics"/><div className="pic-title"> "{winner.title}" by {winner.owner} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Votes:{winner.vote_count}</div></li>))

    return (
      <div className="Winners">
        All Past Winners:
        <ol> {Wins}</ol>

      </div>

    )
  }
}

function mapStateToProps(state) {
  return {winners: state.winners}
}

export default connect(mapStateToProps, { fetchWinner }) (Winners)
