import React, { Component } from 'react'

export default class JackpotBetAmount extends Component {
  render() {
    return (
      <div className="BetPlaced">
        <h1>Solar Studios placed </h1>
        <img src={require("../../assets/images/money.png")} alt="coin"/>
        <span>400.00</span>
        <div class="time">3s ago</div>
      </div>
    )
  }
}
