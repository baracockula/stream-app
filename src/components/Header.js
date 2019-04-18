import React from "react"
import { Link } from "react-router-dom"
import GoogleAuth from "./GoogleAuth"

const Header = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">Twitchy</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">All Streams</Link>
          </li>
          <li className="nav-item">
            <GoogleAuth />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header