import React, { Component } from 'react'

import { connect } from "react-redux"
import { createStream } from "../../actions"
import StreamForm from "./StreamForm"

class StreamCreate extends Component {

  // with redux-form we dont use event object nor the e.preventDefault() - redux form takes care of that, insted it..
  //..will be called with whatever values exists inside our input element (or in other cases checkbox, radio buttons..)
  onSubmit = formValues => {
    console.log(formValues)
    this.props.createStream(formValues)
  }


  render() {
    // we make use of this Field component any time we want to show a field to user - an input, checkbox, radio buton -..
    //..antything that will be asking for input from user
    // name prop is always required and name prop will be the name of the property this field is going to manage
    // for component prop we must define what element we want to render or in most cases it will be helper function..
    //..that return jsx element/s we want
    // this is the syntax for handeling form submission in redux-form
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}


export default connect(null, { createStream })(StreamCreate)