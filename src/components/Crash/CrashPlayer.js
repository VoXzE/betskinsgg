import React, { Component } from 'react'

export default class CrashPlayer extends Component {
  render() {
    return (
      <div className="BetPlaced">
        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/30/30ddeb308ee04b94dfdddc74641df12f27df3ae8_full.jpg" alt="ava"/>
        <h1>Frank Ocean  <span>2.0x</span></h1>
        <div class="crash"><span>placed </span><img src={require("../../assets/images/money.png")}/> 1500.00</div>
      </div>
    )
  }
}
