import React from 'react'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <section>
        <h1>Draggy</h1>
        <h2>The app that's a drag..</h2>
        <div className="drag-area">
          <div className="card bluegreen">ONE</div>
          <div className="card bluegreen">TWO</div>
          <div className="card bluegreen">THREE</div>
        </div>
      </section>
    </div>
  )
}

export default App
