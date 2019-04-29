import React, { Component, Fragment } from 'react'
import ListTitle from './ListTitle'

interface Props {}

interface State {
  listTitle: string
}

export default class List extends Component<Props, State> {
  state: State = {
    listTitle: ''
  }

  setTitle = (e: any) => {
    this.setState({ listTitle: e.target.value })
  }

  render() {
    return (
      <Fragment>
        <input type="text" onChange={this.setTitle} />
        <ListTitle listTitle={this.state.listTitle} />
      </Fragment>
    )
  }
}
