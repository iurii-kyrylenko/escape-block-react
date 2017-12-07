// @flow

const api = {
  data: {
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
  },
  
  async fake(): Promise<number> {
    return new Promise(resolve => setTimeout(() => resolve(42), 1000))
  },

  async error(): Promise<Error> {
    return new Promise((_, error) => setTimeout(() => error(new Error(42)), 1000))
  },

  async getText(url): Promise<string> {
    const response = await fetch(url)
    const text = await response.text()
    return text
  },

  async getJson(url): Promise<string> {
    const fetchData = {
      method: 'POST',
      body: JSON.stringify(this.data)
    }
    const response = await fetch(url, fetchData)
    const json = await response.json()
    return JSON.stringify(json)
  },
  
  async info(): Promise<string> {
    return api.getText('https://esc-block.herokuapp.com')
  },
  
  async backtrack(): Promise<string> {
    return api.getJson('https://esc-block.herokuapp.com/backtrack')
  },

  async backtrackLength(): Promise<string> {
    return api.getJson('https://esc-block.herokuapp.com/backtrack-length')
  },

  async length(): Promise<string> {
    return api.getJson('https://esc-block.herokuapp.com/length')
  }
}

export default {
  fake: api.fake,
  error: api.error,
  info: api.info,
  backtrack: api.backtrack,
  backtrackLength: api.backtrackLength,
  length: api.length
}
