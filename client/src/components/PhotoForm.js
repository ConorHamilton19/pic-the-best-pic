import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import { addPhoto} from '../actions/photoActions'
import { fetchPhotos } from '../actions/photoActions'
import { Redirect} from 'react-router-dom'


class PhotoForm extends Component {

  state = {
    photo: {
      title: '',
      owner: '',
      picture: null
    },
    redirect: false
  }

  handleNameChange = (e) => {
    this.setState({
      photo: {
        ...this.state.photo, title: e.target.value
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

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles[0]);

    this.setState({
       photo: {
       ...this.state.photo, picture: acceptedFiles[0]
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const photo = new FormData()
    photo.append('[photo]title', this.state.photo.title)
    photo.append('[photo]owner', this.state.photo.owner)
    photo.append('[photo]picture', this.state.photo.picture)
    this.props.addPhoto(photo)
    this.props.fetchPhotos()
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

         <label>Picture:</label>
         <div>
           <Dropzone onDrop={this.onDrop} accept="image/png, image/gif,image/jpg,image/jpeg" >

             {({getRootProps, getInputProps}) => (
               <div {...getRootProps()}>
                 <input {...getInputProps()} />
               {this.state.photo.picture !== null ? "File Uploaded" :
               "Click here to Upload Pic" }
               </div>
             )}
           </Dropzone>

         </div>
            <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addPhoto, fetchPhotos }) (PhotoForm)
