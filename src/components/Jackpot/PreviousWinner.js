import React, { Component } from 'react'

export default class PreviousWinner extends Component {
  render() {
    return (
      <div className="PreviousWinnerContainer">
        <div className="PreviousWinnerBox">
          <div className="WinnerAvatar">
            <img src={require("../../assets/images/Avatar.png")} alt="avatar"/>
            <h1>Solar Studios</h1>
          </div>

          <h2>Has won game <span>#4417</span> with <span>11%</span> chance</h2>

          <div className="WinnerBalance">
            <img src={require("../../assets/images/money.png")} alt="coin"/>
            2000.00
          </div>
        </div>
      </div>
    )
  }
}
