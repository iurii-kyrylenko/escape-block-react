// @flow

import React, { Component } from 'react'
import api from '../services/api'
import './EscBlock.css'

type State = {
  isLoading: boolean,
  result: any,
  error: string | null
};

class EscBlock extends Component<{}, State> {
  state = {
    isLoading: false,
    result: null,
    error: null
  }

  selectApi(callApi: () => Promise<string | number | Error>) {
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
    const error = this.state.error &&
      <div className="error" dangerouslySetInnerHTML={{__html: `${this.state.error}`}} />
    return (
      <div className="escBlock">
        {button(api.fake, 'Fake')}
        {button(api.error, 'Error')}
        {button(api.info, 'Info')}
        {button(api.backtrack, 'Backtrack')}
        {button(api.backtrackLength, 'Backtrack Length')}
        {button(api.length, 'Length')}
        <div className="info">
          <div>{this.state.isLoading ? 'Loading ...' : ''}</div>
          {error}
          <div>{this.state.result}</div>
        </div>
      </div>
    )
  }
}

export default EscBlock
