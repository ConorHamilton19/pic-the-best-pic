import React, { Component } from 'react'

class Winner extends Component {

  render(){

    const Winner = this.props.winners.map((winner, index) => (<li key={index}> {winner.title} by {winner.owner} </li>))

    return (
      <div className="Winner">
        {Winner[0]}
      </div>
    )
  }
}


export default Winner
