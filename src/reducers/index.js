import { combineReducers } from "redux"
import authReducer from "./authReducer"
import streamReducer from "./streamReducer"
//redux-form library for handling form data 
import { reducer as formReducer } from "redux-form"

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  stream: streamReducer
})