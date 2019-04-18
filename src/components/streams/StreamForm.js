// StremForm is tehnically rendered or wraped by redux-form

import React, { Component } from 'react'

// Field is capitalized cause it is a react component, while reduxForm is function that has same functionality as..
//..{ connect } function from react-redux library and it will make sure we can call some action creator and get..
//..some form data into ourcomponent
import { Field, reduxForm } from "redux-form"

class StreamForm extends Component {

  // with redux-form we dont use event object nor the e.preventDefault() - redux form takes care of that, instead it..
  //..will be called with whatever values exists inside our input element (or in other cases checkbox, radio buttons..)
  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  renderInput(formProps) {
    //we access the props on elements through formProps and this way we have all the props of input element avaliable
    // we used touched function from formProps.meta which indicates when user touched(clicked) on our input and then..
    //..we can properly set our error message
    return (
      <div className="form-group">
        <label >{formProps.label}</label>
        <input {...formProps.input} className={formProps.className} autoComplete="off" />
        {formProps.meta.touched && formProps.meta.error ? <div>{formProps.meta.error}</div> : null}
      </div>
    )
  }

  render() {
    // we make use of this Field component any time we want to show a field to user - an input, checkbox, radio buton -..
    //..antything that will be asking for input from user
    // name prop is always required and name prop will be the name of the property this field is going to manage
    // for component prop we must define what element we want to render or in most cases it will be helper function..
    //..that return jsx element/s we want
    // this is the syntax for handling form submission in redux-form
    return (
      <form className="container" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title" className="form-control" />
        <Field name="description" component={this.renderInput} label="Enter description" className="form-control" />
        <button className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}
  if (!formValues.title) {
    errors.title = "You must enter title"
  }
  if (!formValues.description) {
    errors.description = "You must enter description"
  }
  return errors
}

// syntax here is reduxForm is going to return a function and we will immediately call that function with StreamForm
export default reduxForm({
  // name of this form is going to generally be whatever the purpose of the form is (so its descriptive name) and..
  //..this is how redux-form stores data inside reducers, so our data will be stored in streamForm reducer 
  form: "streamForm",
  // this is how we wire up our validate function to redux-form
  validate: validate
})(StreamForm)

