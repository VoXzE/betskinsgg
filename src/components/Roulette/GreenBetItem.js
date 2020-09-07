import React, { Component } from 'react'

export default class GreenBetItem extends Component {
  render() {
    return (
      <div className="player">
        <img id="player" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/30/30ddeb308ee04b94dfdddc74641df12f27df3ae8_full.jpg" alt="ava"/>
        <p>Solar Studios</p>
        <div class="amount">
          <img id="coin" src={require("../../assets/images/money.png")} alt="coin"/>
          1500.00
        </div>
      </div>
    )
  }
}
