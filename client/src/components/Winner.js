import React, { Component } from 'react'

class Winner extends Component {



  render(){
    console.log(this.props.winner)
    return (
      <div className="Winner">
        <h1> {this.props.winner.title}</h1>
      </div>

    )
  }
}


export default Winner
