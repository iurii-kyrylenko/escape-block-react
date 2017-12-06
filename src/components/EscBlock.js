import React, { Component } from 'react'
import api from '../services/api'

class EscBlock extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      result: null,
      error: null
    }
  }

  selectApi(callApi) {
    return async () => {
      this.setState({
        isLoading: true,
        result: null,
        error: null
      })
      try {
        const result = await callApi()
        this.setState({
          isLoading: false,
          result,
          error: null
        })
      } catch (e) {
        this.setState({
          isLoading: false,
          result: null,
          error: e.message
        })
      }
    }
  }

  render() {
    const button = (api, text) => <button onClick={this.selectApi(api)}>{text}</button>
    return (
      <div className="escBlock">
        { button (api.fake, 'Fake')}
        { button (api.error, 'Error')}
        { button (api.fake, 'Info')}
        { button (api.info, 'Backtrack')}
        { button (api.backtrack, 'Backtrack Length')}
        { button (api.length, 'Length')}
        <div className="info">
          <div>{this.state.isLoading ? 'Loading ...' : ''}</div>
          <div className="error">{this.state.error ? `Error: ${this.state.error}` : ''}</div>
          <div>{this.state.result}</div>
        </div>
      </div>
    )
  }
}

export default EscBlock
