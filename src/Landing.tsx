import React from 'react'
import DragDrop from './DragDrop';
import './App.css'

const App: React.FC = () => {

  // componentDidMount() {
  //   let cardTwo = document.getElementById('cardTwo')

  // }

  return (
    <div className="App">
      <section>
        <h1>Draggy</h1>
        <h2>The app that's a drag..</h2>
        <DragDrop />
      </section>
    </div>
  )
}

export default App