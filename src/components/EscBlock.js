import React, { Component } from 'react'
import api from '../services/api'

class EscBlock extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      result: '',
      error: ''
    }
  }

  selectApi(callApi) {
    return async () => {
      this.setState({
        isLoading: true,
        result: ''
      })
      const result = await callApi()
      this.setState({
        isLoading: false,
        result
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={ this.selectApi(api.fake) }>Fake</button>&nbsp;
        <button onClick={ this.selectApi(api.info) }>Info</button>&nbsp;
        <button onClick={ this.selectApi(api.backtrack) }>Backtrack</button>&nbsp;
        <button onClick={ this.selectApi(api.backtrackLength) }>Backtrack Length</button>&nbsp;
        <button onClick={ this.selectApi(api.length) }>Length</button>
        <div>{ this.state.isLoading ? 'Loading ...' : '' }</div>
        <pre>{ this.state.result }</pre>
        </div>
    )
  }
}

export default EscBlock
