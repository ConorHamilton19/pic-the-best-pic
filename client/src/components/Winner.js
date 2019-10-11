import React, { Component } from 'react'

class Winner extends Component {

  render(){

    const Winner = this.props.winners.map((winner, index) => (<img className="pic-tile" src={winner.picture.url} alt="pics"/>))

    return (
      <div className="Winner">
        {Winner[0]}
      </div>
    )
  }
}


export default Winner
