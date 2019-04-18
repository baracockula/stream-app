import React, { Component } from 'react'
import { connect } from "react-redux"

import { fetchStream } from "../../actions"

class StreamShow extends Component {

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchStream(this.props.match.params.id)
    }
  }

  render() {
    if (!this.props.stream) {
      return null
    }
    return (
      <div>
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)
