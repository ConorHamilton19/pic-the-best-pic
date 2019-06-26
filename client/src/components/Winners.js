import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWinner } from '../actions/photoActions'

class Winners extends Component {


  async componentDidMount() {
      this.props.fetchWinner()
    }


  render(){

      const Wins = this.props.winners.map((winner, index) => (<li key={index}> {winner.title} by {winner.owner}</li>))

    return (
      <div className="Winners">
        <ul> {Wins}</ul>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {winners: state.winners}
}

export default connect(mapStateToProps, { fetchWinner }) (Winners)
