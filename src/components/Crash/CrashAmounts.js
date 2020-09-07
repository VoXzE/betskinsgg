import React, { Component } from 'react'
import CrashAmount from './CrashAmount';

export default class CrashAmounts extends Component {
  render() {
    return (
      <div className="MiniCon2 crash">
        <div className="top">
          <div style={{flex: 1, display: "flex", flexDirection: "row", width: "100%"}}>
            <div className="total">
              <img src={require("../../assets/images/money.png")} alt="coin"/>
              <input type="text" name="amount" placeholder="0.00"/>
              <button className="clearBtn">CLEAR</button>
            </div>
            <button className="button">Place Bet</button>
          </div>
          <div className="PresetAmounts">
            <button className="presetBtn">+10</button>
            <button className="presetBtn">+100</button>
            <button className="presetBtn">+1k</button>
            <button className="presetBtn">+10k</button>
            <button className="presetBtn">+100k</button>
            <button className="presetBtn">1/2</button>
            <button className="presetBtn">x2</button>
            <button className="presetBtn MAX">MAX</button>
          </div>
        </div>
        <div className="bottom">
          <div className="BetsPlacedAmount">
            <CrashAmount />
            <CrashAmount />
            <CrashAmount />
            <CrashAmount />
            <CrashAmount />
            <CrashAmount />
            <CrashAmount />
            <CrashAmount />
            <CrashAmount />
            <CrashAmount />
          </div>

        </div>
      </div>
    )
  }
}
