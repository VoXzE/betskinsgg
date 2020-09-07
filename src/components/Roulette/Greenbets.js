import React, { Component } from 'react'
import GreenBetItem from './GreenBetItem';

class Greenbets extends Component {
  render() {
    return (
      <div className="greenbets">
        <div className="header greenHeader">
          <div className="greenCircle">
            14x
          </div>
          <div className="name">
            Green
          </div>
          <div className="betamount">
            <img src={require("../../assets/images/money.png")} alt="coin"/>
            1500.00
          </div>
        </div>
        <div className="king">
          <div className="player">
            <img id="king" src={require("../../assets/images/king.png")} alt="king"/>
            <img id="player" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/30/30ddeb308ee04b94dfdddc74641df12f27df3ae8_full.jpg" alt="ava"/>
          </div>
          <div className="name">
            <h1><span>Solar Studios</span> is king</h1>
          </div>
        </div>

        <div className="players">
          <GreenBetItem />
          <GreenBetItem />
          <GreenBetItem />
        </div>

      </div>
    )
  }
}

export default Greenbets
