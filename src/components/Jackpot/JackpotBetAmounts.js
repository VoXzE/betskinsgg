import React, { Component } from 'react'
import JackpotBetAmount from './JackpotBetAmount';

export default class JackpotBetAmounts extends Component {
  render() {
    return (
      <div className="minicontainer amounts">
        <div className="top">
          <div style={{flex: 1, display: "flex", flexDirection: "row", width: "100%"}}>
            <div className="total">
              <img src={require("../../assets/images/money.png")} alt="coin"/>
              <input type="text" name="amount" value={this.props.amount} placeholder="0.00" onChange={this.props.onChange}/>
              <button className="clearBtn" onClick={this.props.clearBet}>CLEAR</button>
            </div>
            <button className="button" onClick={this.props.placeBet}>Place Bet</button>
          </div>
          <div className="PresetAmounts">
          <button className="presetBtn" onClick={() => this.props.handlePresetBet(10)}>+10</button>
          <button className="presetBtn" onClick={() => this.props.handlePresetBet(100)}>+100</button>
          <button className="presetBtn" onClick={() => this.props.handlePresetBet(1000)}>+1k</button>
          <button className="presetBtn" onClick={() => this.props.handlePresetBet(10000)}>+10k</button>
          <button className="presetBtn" onClick={() => this.props.handlePresetBet(100000)}>+100k</button>
          <button className="presetBtn" onClick={() => this.props.handlePresetBet("half")}>1/2</button>
          <button className="presetBtn" onClick={() => this.props.handlePresetBet("double")}>x2</button>
          <button className="presetBtn MAX">MAX</button>
          </div>
        </div>
        <div className="bottom">
          <div className="BetsPlacedAmount">
            <JackpotBetAmount />
            <JackpotBetAmount />
            <JackpotBetAmount />
            <JackpotBetAmount />
            <JackpotBetAmount />
            <JackpotBetAmount />
            <JackpotBetAmount />
            <JackpotBetAmount />
            <JackpotBetAmount />
            <JackpotBetAmount />
          </div>

        </div>
      </div>
    )
  }
}
