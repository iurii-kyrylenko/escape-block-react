import React, { Component } from 'react'

const SIZE = 50

class Block extends Component {
  render () {
    const { dir, len, row, pos } = this.props
    const style = {
      width: dir === 'v' ? SIZE : len * SIZE,
      height: dir === 'v' ? len * SIZE : SIZE,
      top: dir === 'v' ? pos : row * SIZE,
      left: dir === 'v' ? row * SIZE : pos
    }
    return (
      <div className="block" style={style} />
    )
  }
}

export default Block
