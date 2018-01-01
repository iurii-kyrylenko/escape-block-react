import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CELL } from '../const'

class Block extends Component {
  render () {
    const { dir, len, row, pos, target } = this.props
    const style = {
      width: dir === 'v' ? CELL : len * CELL,
      height: dir === 'v' ? len * CELL : CELL,
      top: dir === 'v' ? pos * CELL : row * CELL,
      left: dir === 'v' ? row * CELL : pos * CELL
    }
    const className = 'block' + (target ? ' target' : '')
    return (
      <div className={className} style={style} />
    )
  }
}

Block.propTypes = {
  dir: PropTypes.oneOf(['v', 'h']),
  len: PropTypes.number,
  row: PropTypes.number,
  pos: PropTypes.number,
  target: PropTypes.bool
}

Block.defaultProps = {
  target: false
}

export default Block
