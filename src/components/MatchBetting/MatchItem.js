import React, { Component } from 'react'
import CircularProgressBar from './CircularProgressBar';


export default class MatchItem extends Component {
  render() {
    return (
      <div className="MatchItem">
        <div className="left">
          <div className="league">
            <h1>ESL</h1>
          </div>
          <div className="betamount">
            <img src={require("../../assets/images/money.png")} alt="coin"/>
            1500.00
          </div>
          <div className="teaminfo">
            <div className="teamname">
              <h1>Team Solar</h1>
            </div>
            <div className="teamodds">
              <p>36%</p>
              <h1>1.15x</h1>
            </div>
            <button className="redButton" onClick={this.props.addBet}>Bet</button>
          </div>
          <div className="teamlogo">
            <img src={require("../../assets/images/team.png")} alt="team"/>
          </div>
        </div>
        <div className="middle">
          <div className="Color" />
          <div className="matchinfo">
            <h1>CS:GO</h1>
            <p>BO3</p>
          </div>
          <CircularProgressBar
            strokeWidth="6"
            sqSize="75"
            percentage={40}/>
          <div className="Color" />
        </div>
        <div className="right">
          <div className="timeleft">
            <h1>00:30</h1>
            <p>Min left</p>
          </div>
          <div className="betamount">
            <img src={require("../../assets/images/money.png")} alt="coin"/>
            1500.00
          </div>
          <div className="teaminfo">
            <div className="teamname">
              <h1>Team Solar</h1>
            </div>
            <div className="teamodds">
              <p>36%</p>
              <h1>1.15x</h1>
            </div>
            <button className="blueButton" onClick={this.props.addBet}>Bet</button>
          </div>
          <div className="teamlogo">
            <img src={require("../../assets/images/team.png")} alt="team"/>
          </div>
        </div>
      </div>
    )
  }
}
