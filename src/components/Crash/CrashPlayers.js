import React, { Component } from 'react'
import CrashPlayer from './CrashPlayer';
import ReactSVG from 'react-svg';

export default class CrashPlayers extends Component {
  render() {
    return (
      <div className="MiniCon1 crash right">
        <div className="top">
          <div style={{flex: 1, display: "flex", flexDirection: "row", width: "65%"}}>
            <div className="total">
              <img src={require("../../assets/images/money.png")} alt="coin"/>
              4800.00 <span>Total</span>
            </div>
            <div className="bets">
              <ReactSVG src={require("../../assets/images/User.svg")} className="icon"/>55 Bets
            </div>
          </div>
          <div className="PrevCrash">
            <a className="yellow">1.12</a>
            <a>1.12</a>
            <a className="green">1.12</a>
            <a className="red">1.12</a>
            <a>1.12</a>
            <a className="green">1.12</a>
            <a className="red">1.12</a>
            <a>1.12</a>
            <a className="red">1.12</a>
            <a className="green">1.12</a>
            <a className="green">1.12</a>
            <a className="red">1.12</a>
          </div>
        </div>
        <div className="bottom">
          <div className="BetsPlacedAmount">
            <CrashPlayer />
            <CrashPlayer />
            <CrashPlayer />
            <CrashPlayer />
            <CrashPlayer />
            <CrashPlayer />
            <CrashPlayer />
            <CrashPlayer />
            <CrashPlayer />
            <CrashPlayer />
          </div>

        </div>
      </div>
    )
  }
}
