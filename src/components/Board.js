// @flow

import React, { Component } from 'react';
import Block from './Block';
import styles from './Board.css';
import { CELL, COLS, ROWS } from '../const';

type BlockType = {
  dir: 'h' | 'v',
  len: number,
  row: number,
};

type BoardStateType = {
  board: Array<BlockType>,
  state: Array<number>,
  target: number,
};

class Board extends Component<{}, BoardStateType> {
  state = {
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
    target: { index: 1, position: 4 },
  };

  render() {
    const { board, state, target } = this.state;
    const targetBlock = board[target.index];
    const gatePos = dir => target.position === 0 ? -4 : (dir === 'h' ? COLS : ROWS) * CELL;
    const gateHeight = targetBlock.row === ROWS - 1 ? CELL + 2 : CELL + 3;
    const gateWidth = targetBlock.row === COLS - 1 ? CELL + 2 : CELL + 3;
    const gateStyle = targetBlock.dir === 'h'
      ? { width: 4, height: gateHeight, top: targetBlock.row * CELL - 1, left: gatePos('h') }
      : { width: gateWidth, height: 4, top: gatePos('v'), left: targetBlock.row * CELL - 1 };

    return (
      <div className="board" style={{ width: COLS * CELL, height: ROWS * CELL }}>
        {board.map((block, id) => (
            <Block {...block} pos={state[id]} target={target.index === id} />
        ))}
        <div className="exit" style={gateStyle}></div>
      </div>
    );
  }
}

export default Board;
