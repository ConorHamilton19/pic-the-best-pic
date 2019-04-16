import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPhoto} from '../actions/photoActions'
import { Redirect} from 'react-router-dom'


class PhotoForm extends Component {

  state = {
    photo: {
      title: '',
      owner: ''
    },
    redirect: false
  }

  handleNameChange = (e) => {
    this.setState({
      photo: {
        title: e.target.value
      }
    })
  }

  handleOwnerChange = (e) => {
    this.setState({
      photo: {
        ...this.state.photo, owner: e.target.value
      }
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
            <input type="text"
                 value={this.state.photo.title} onChange={this.handleNameChange} /> <br></br>
          <label>Enter Owner Name:</label>
            <input type="text"
                 value={this.state.photo.owner} onChange={this.handleOwnerChange} /><br></br>
            <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addPhoto }) (PhotoForm)
