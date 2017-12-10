import React, { Component } from 'react'
import styles from './Board.css'

const Board = () => (
  <div className="board" style={{ width: 300, height: 300 }}>
    <div className="block" style={{ width: 100, height: 50, top: 50, left: 50 }}></div>
    <div className="block target" style={{ width: 100, height: 50, top: 100, left: 100 }}></div>
    <div className="block" style={{ width: 150, height: 50, top: 150, left: 0 }}></div>
    <div className="block" style={{ width: 100, height: 50, top: 250, left: 0 }}></div>
    <div className="block" style={{ width: 100, height: 50, top: 250, left: 150 }}></div>
    <div className="block" style={{ width: 50, height: 150, top: 0, left: 0 }}></div>
    <div className="block" style={{ width: 50, height: 100, top: 200, left: 100 }}></div>
    <div className="block" style={{ width: 50, height: 100, top: 0, left: 150 }}></div>
    <div className="block" style={{ width: 50, height: 150, top: 100, left: 200 }}></div>
    <div className="block" style={{ width: 50, height: 100, top: 0, left: 250 }}></div>
    <div className="block" style={{ width: 50, height: 100, top: 150, left: 250 }}></div>
    <div className="exit" style={{ width: 4, height: 52, top: 99, left: 300 }}></div>
    </div>
)

export default Board
