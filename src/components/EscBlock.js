import React, { Component } from 'react'

class EscBlock extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      result: '',
      error: ''
    }
    this.handleTest = this.handleTest.bind(this)
  }

  async handleTest() {
    this.setState({
      isLoading: true,
      result: ''
    })
    const result = await this.getResult()
    this.setState({
      isLoading: false,
      result
    })
  }

  async getFakeResult() {
    return new Promise(resolve => setTimeout(() => resolve(42), 1000))
  }

  async getResult() {
    const url = 'https://esc-block.herokuapp.com/'
    // const url = 'https://api.github.com/users/iurii-kyrylenko'
    const response = await fetch(url)
    // const json = await response.json()
    // return JSON.stringify(json, null, 2)
    const text = await response.text()
    return text
  }

  async getResult2() {
    const url = 'https://esc-block.herokuapp.com/backtrack'

    const data = {
      board: [
        { dir: 'h', len: 2, row: 1 },
        { dir: 'h', len: 2, row: 2 },
        { dir: 'h', len: 3, row: 3 },
        { dir: 'h', len: 2, row: 5 },
        { dir: 'h', len: 2, row: 5 },
        { dir: 'v', len: 3, row: 0 },
        { dir: 'v', len: 2, row: 2 },
        { dir: 'v', len: 2, row: 3 },
        { dir: 'v', len: 3, row: 4 },
        { dir: 'v', len: 2, row: 5 },
        { dir: 'v', len: 2, row: 5 }
      ],
      state: [1,2,0,0,3,0,4,0,2,0,3],
      target: { index: 1, position: 4 }
    }

    const fetchData = {
      method: 'GET',
      body: JSON.stringify(data)
    }
    
    const response = await fetch(url, fetchData)
    const json = await response.json()
    return JSON.stringify(json, null, 2)
  }

  render() {
    return (
      <div>
        endpoint: /&nbsp;&nbsp;
        <button onClick={ this.handleTest }>GET</button>
        <div>{ this.state.isLoading ? 'Loading ...' : '' }</div>
        <pre>{ this.state.result }</pre>
        </div>
    )
  }
}

export default EscBlock
