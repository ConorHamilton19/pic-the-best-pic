import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPhoto} from '../actions/photoActions'
import { Redirect} from 'react-router-dom'


class PhotoForm extends Component {

  state = {
    photo: '',
    redirect: false
  }

  handleChange = (e) => {
    this.setState({
      photo: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.photo)
    this.props.addPhoto(this.state.photo)
    this.setState({
      redirect: true
    })
  }

  render() {

    if (this.state.redirect === true) {
        return <Redirect to="/" />
    }

    return(
      <div className="PhotoForm">
      <h1>Add a pic!</h1>
      <form onSubmit={this.handleSubmit}>
      <label>Enter Photo Name:</label>
      <input type="text" value={this.state.photo} onChange={this.handleChange} />
      <input type="submit"/>
      </form>
      </div>
    )
  }
}

export default connect(null, { addPhoto }) (PhotoForm)
