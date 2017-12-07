// @flow

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import EscBlock from './components/EscBlock'

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Escape Block Solver</h1>
        </header>
        <p className="App-intro">
          Test API
        </p>
        <EscBlock />
      </div>
    )
  }
}

export default App
