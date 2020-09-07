import React, { Component } from 'react'
import LogoComponent from '../Global/LogoComponent';
import TeamItem from './TeamItem';
import MatchItem from './MatchItem';
import ReactSVG from 'react-svg';

const dummyData = [1, 2, 3, ]

export default class index extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      betSlips: [1]
    }
  }

  addBetSlip = () => {
    let newArray = this.state.betSlips.slice();
    newArray.push("1")
    this.setState({ betSlips: newArray })
  }
  render() {
    return (
      <div className="container">
        <LogoComponent/>
        <div className="MatchBettingContainer">
          <div className="MiniNav">
            <div className="buttons">
              <button className="button blue">Upcoming</button>
              <button className="button">Live</button>
            </div>
            <div className="games"> 
              <img src={require("../../assets/images/overwatch.png")} alt="overwatch" className="gameLogo"/>
              <img src={require("../../assets/images/dota2.png")} alt="overwatch" className="gameLogo"/>
              <img src={require("../../assets/images/lol.png")} alt="overwatch" className="gameLogo"/>
              <ReactSVG src={require("../../assets/images/csgo.svg")} className="gameLogo"/>
            </div>

          </div>
          <div className="MatchesContainer">
            <div className="Matches">
              <MatchItem addBet={this.addBetSlip}/>
              <MatchItem addBet={this.addBetSlip}/>
              <MatchItem addBet={this.addBetSlip}/>
              <MatchItem addBet={this.addBetSlip}/>
            </div>
          </div>
          <div className="MatchFooter">
            <div className="BetSlips">
              {this.state.betSlips.map((d) => (
                <TeamItem />
              ))}
            </div>
            <div className="BetOptions">
              <div className="Info">
                <div className="total">
                  <img src={require("../../assets/images/money.png")} alt="coin"/>
                  <input type="text" name="amount" placeholder="0.00"/>
                  <button className="clearBtn">CLEAR</button>
                </div>
                <p>Multiplier: <span>21.19X</span></p>
                <div className="potential">
                  <p>Potential win</p>
                  <img src={require("../../assets/images/money.png")} alt="coin"/>
                  <span>5000.00</span>
                </div>
              </div>
              <button className="button">BET</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
