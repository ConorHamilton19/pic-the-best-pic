import React, { Component } from 'react'

class Winner extends Component {

  render(){

    return (
      <div className="Winner">
        <h2> {this.props.winner.title}</h2>
      </div>

    )
  }
}


export default Winner
