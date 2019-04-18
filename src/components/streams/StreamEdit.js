import React, { Component } from 'react'
import { connect } from "react-redux"
import _ from "lodash"

import StreamForm from "./StreamForm"
import { fetchStream, editStream } from "./../../actions"

class StreamEdit extends Component {

  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.fetchStream(this.props.match.params.id)
    }
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues)
  }

  render() {
    console.log(this.props.stream)
    // initialValues is special property name with redux-form (the outside curly bracers inicates that we're gonna write..
    //..some javascript expressions inside jsx, and second set indicates we're creating a normal object) and those initial..
    //..values connects to title and description property we set on Field inside StreamForm or we can write shorthand..
    //..method instead  -  initialValues={{ title: this.props.stream.title, description: this.props.stream.description}}
    if (!this.props.stream) {
      return null
    }
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, "title", "description")} />
      </div>
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id]
  }
}


export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)