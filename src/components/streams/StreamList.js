import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { fetchStreams } from "./../../actions"
import Octicon, { Play } from '@githubprimer/octicons-react'

class StreamList extends Component {

  componentDidMount() {
    this.props.fetchStreams()
  }

  renderList = () => {
    return (
      this.props.streams.map(stream => (

        <div className="container media border border-dark mb-1 d-flex align-items-center" key={stream.id}>
          <Octicon className="mr-3 align-self-center" icon={Play} size='large' />
          <div className="media-body">
            <h5>{stream.title}</h5>
            <p>{stream.description}</p>
          </div>
          {this.props.currentUserId === stream.userId ? (
            <div>
              <Link to={`/stream/edit/${stream.id}`} className="btn btn-warning mr-1">Edit</Link>
              <Link to={`/stream/delete/${stream.id}`} className="btn btn-danger">Delete</Link>
            </div>
          ) : null}
        </div>
      ))
    )
  }

  //if user is signed in render Create Stream button
  renderCreateButton = () => {
    return (
      <div className="text-right mt-3 mr-3">
        {this.props.isSignedIn ? <Link to="/stream/new" className="btn btn-success">Create Stream</Link> : null}
      </div>
    )
  }


  render() {
    return (
      <div className="container">
        <h2>Streams</h2>
        {this.renderList()}
        {this.renderCreateButton()}
      </div>
    )
  }

}


const mapStateToProps = state => {
  return {
    streams: Object.values(state.stream),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)