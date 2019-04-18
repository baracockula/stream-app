import React from "react"
// we dont normally import this in our react application just in root files like index.js but since this Modal is..
//..also in root of our file we need to do this
import ReactDOM from "react-dom"


const Modal = props => {
  // this function is going to take 2 arguments, first is some jsx we want to show on the screen, second is reference to..
  //..element that we want to render this portal into.
  return ReactDOM.createPortal(
    <div className="modal" id="myModal" onClick={props.onDismiss}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.title}</h5>
          </div>
          <div className="modal-body">
            {props.content}
          </div>
          <div className="modal-footer">
            {props.actions}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  )
}

export default Modal