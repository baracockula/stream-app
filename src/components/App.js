import React from "react"
// BrowserRouter creates his own history object, and for our programatic navigation to work we need import just plain..
//..Router and set history prop to it (and delete BrowserRouter)
// Switch will make sure that just one of our paths gets executed (it resolves problem if /:id matches any other route)
import { Router, Route, Switch } from "react-router-dom"

import StreamList from "./streams/StreamList"
import StreamShow from "./streams/StreamShow"
import StreamCreate from "./streams/StreamCreate"
import StreamEdit from "./streams/StreamEdit"
import StreamDelete from "./streams/StreamDelete"
import Header from "./Header"

// we are now in charge of history object as opposed react-router-dom creating it internally
import history from "../history"


const App = () => {

  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new" exact component={StreamCreate} />
            <Route path="/stream/:id" exact component={StreamShow} />
            <Route path="/stream/edit/:id" exact component={StreamEdit} />
            <Route path="/stream/delete/:id" exact component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App