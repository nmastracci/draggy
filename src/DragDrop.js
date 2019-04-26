import React, { Component } from 'react';

export default class DragDrop extends Component {


  componentDidMount() {
    let draggingThing;
    let cardTwo = document.getElementById('cardTwo')
    let dropArea = document.querySelector('.drop-area');
    document.addEventListener('dragenter', (event) => {
      event.preventDefault()
    })

    dropArea.addEventListener('dragover', (event) => {
      event.preventDefault()
    })

    document.addEventListener('drop', (event) => {
      event.preventDefault()
      if (event.target.className === "drop-area") {
        draggingThing.parentNode.removeChild(draggingThing)
        event.target.appendChild(draggingThing)
      }
    }, false)

    cardTwo.addEventListener('dragstart', (event) => {
      console.log({event})
      draggingThing = event.target
    })
  }

  render () {
    return (
      <React.Fragment>
        <div className="drag-area">
          <div
            draggable={true}
            id="cardTwo"
            className="card bluegreen"
          >TWO</div>
        </div>
        <div className="drop-area pinkblue">

        </div>
        <div>

        </div>
      </React.Fragment>
    )
  }
}