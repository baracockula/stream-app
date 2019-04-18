import React, { Component } from 'react'
import { connect } from "react-redux"

import { signIn, signOut } from "./../actions"

class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "1077617591241-43k40hqc9gs4mqgk554iejcu9k8lfjka.apps.googleusercontent.com",
        scope: "email"
      })
        .then(() => {
          // so after initializing our gapi library we are assigning auth instance to this.auth
          this.gAuth = window.gapi.auth2.getAuthInstance()
          // then we immediately update our state inside our redux store
          this.onAuthChange(this.gAuth.isSignedIn.get())
          // we need to set this listen function to automaticaly change state on isSignedIn and pass it callback, cause..
          //..without it it will update state only if we refresh the page manually
          this.gAuth.isSignedIn.listen(this.onAuthChange)
        })
    })
  }


  onSignInClick = () => {
    this.gAuth.signIn()
  }

  onSignOutClick = () => {
    this.gAuth.signOut()
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.gAuth.currentUser.get().getId())
    }
    else {
      this.props.signOut()
    }

  }

  renderAuthButton() {
    if (this.props.auth.isSignedIn === null) {
      return null
    }
    else if (this.props.auth.isSignedIn === true) {
      return (
        <button onClick={this.onSignOutClick}>Sign Out</button>
      )
    }
    else {
      return (
        <button onClick={this.onSignInClick}>Sign In with Google</button>
      )
    }
  }

  render() {
    return (
      <div className="mt-1">
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)