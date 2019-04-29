import React, { Component } from 'react';
interface Props {

}
interface State {
  dragItem: any
}

export default class DragDrop extends Component<Props, State> {
  state: State = {
    dragItem: undefined
  }

  dragStart = (event:any) => {
    this.setState({
      dragItem: event.target
    })
  }

  drop = (event:any ) => {
    event.preventDefault()
    const { dragItem } = this.state
    if (event.target.className === "drop-area") {
      dragItem.parentNode.removeChild(dragItem)
      event.target.appendChild(dragItem)
    }
  }

  render () {
    return (
      <React.Fragment>
        <div
          className="drop-area"
          onDragOver={(event) => event.preventDefault()}
          onDrop={this.drop}
        >
          {["ONE", "TWO", "THREE"].map((word) => (
              <div
                key={word}
                className="card bluegreen"
                draggable={true}
                onDragStart={this.dragStart}
              >{word}</div>
            )
          )}
        </div>
        <div
          className="drop-area"
          onDragOver={(event) => event.preventDefault()}
          onDrop={this.drop}
        />
      </React.Fragment>
    )
  }
}