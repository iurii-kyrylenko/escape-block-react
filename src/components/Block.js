import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CELL } from '../const';

class Block extends Component {
  render () {
    const { dir, len, row, pos, target } = this.props;

    const style = dir === 'v'
      ? { width: CELL, height: len * CELL, top: pos * CELL, left: row * CELL }
      : { width: len * CELL, height: CELL, top: row * CELL, left: pos * CELL };

    const className = 'block' + (target ? ' target' : '');

    return (
      <div className={className} style={style} />
    );
  }
}

Block.propTypes = {
  dir: PropTypes.oneOf(['v', 'h']),
  len: PropTypes.number,
  row: PropTypes.number,
  pos: PropTypes.number,
  target: PropTypes.bool
};

Block.defaultProps = {
  target: false
};

export default Block;
