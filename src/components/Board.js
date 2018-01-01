import React, { Component } from 'react'
import Block from './Block'
import styles from './Board.css'
import { CELL, COLS, ROWS } from '../const'

const Board = () => (
  <div className="board" style={{ width: COLS * CELL, height: ROWS * CELL }}>
    <Block {...{ dir: 'h', len: 2, row: 1, pos: 1 }} />
    <Block {...{ dir: 'h', len: 2, row: 2, pos: 2, target: true }} />
    <Block {...{ dir: 'h', len: 3, row: 3, pos: 0 }} />
    <Block {...{ dir: 'h', len: 2, row: 5, pos: 0 }} />
    <Block {...{ dir: 'h', len: 2, row: 5, pos: 3 }} />
    <Block {...{ dir: 'v', len: 3, row: 0, pos: 0 }} />
    <Block {...{ dir: 'v', len: 2, row: 2, pos: 4 }} />
    <Block {...{ dir: 'v', len: 2, row: 3, pos: 0 }} />
    <Block {...{ dir: 'v', len: 3, row: 4, pos: 2 }} />
    <Block {...{ dir: 'v', len: 2, row: 5, pos: 0 }} />
    <Block {...{ dir: 'v', len: 2, row: 5, pos: 3 }} />
    <div className="exit" style={{ width: 4, height: CELL + 2, top: 2 * CELL - 1, left: COLS * CELL }}></div>
    </div>
)

export default Board
