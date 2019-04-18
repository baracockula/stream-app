import React, { Component } from 'react'
import { connect } from "react-redux"

import Modal from "../Modal"
import history from "../../history"
import { fetchStream, deleteStream } from "../../actions"


class StreamDelete extends Component {

  componentDidMount() {

    if (this.props.match.params.id) {
      this.props.fetchStream(this.props.match.params.id)
    }
  }

  onDismiss = () => {
    history.push("/")
  }

  onDelete = (streamId) => {
    this.props.deleteStream(this.props.match.params.id)
  }

  renderActions = () => {
    return (
      <div>
        <button className="btn btn-danger" data-dismiss={this.onDelete ? "modal" : null} onClick={this.onDelete}>Delete</button>
        <button className="btn btn-light" data-dismiss="modal" onClick={this.onDismiss}>Cancel</button>
      </div>
    )
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?"
    }
    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`
  }

  render() {
    return (
      <Modal title="Delete Stream" content={this.renderContent()} actions={this.renderActions()} onDismiss={this.onDismiss} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)












