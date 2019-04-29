import React from 'react'
import './App.css'
import DragDrop from './DragDrop'
import List from './List'

const App: React.FC = () => {
  return (
    <div className="App">
      <section>
        <h1>Draggy</h1>
        <h2>The app that's a drag..</h2>
        <List />
        <DragDrop />
      </section>
    </div>
  )
}

export default App
