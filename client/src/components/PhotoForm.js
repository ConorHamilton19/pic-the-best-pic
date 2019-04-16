import React, { Component } from 'react'


class PhotoForm extends Component {


  render() {


    return(
      <div className="PhotoForm">
      <h1>Add a pic!</h1>
      <form>
      <label>Enter Photo Name:</label>
      <input type="text"/>
      <input type="submit"/>
      </form>
      </div>
    )
  }
}

export default PhotoForm
