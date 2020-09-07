import React, { Component } from 'react'
import LogoComponent from '../Global/LogoComponent';
import CrashPlayers from './CrashPlayers';
import CrashAmounts from './CrashAmounts';

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <LogoComponent />
        <div className="CrashContainer">
          <div className="CrashGame">
            <div id="background">
               <h1 id="crashNumber">1.15x</h1>
               <div className="balances">
                <div className="balance">
                  <img src={require("../../assets/images/money.png")} alt="coin" />
                  25340
                </div>
                <div className="balance">
                  <img src={require("../../assets/images/money.png")} alt="coin" />
                  +25340
                </div>
               </div>
              <img src={require("../../assets/images/Rocket.png")} alt="star" id="rocket"/>
              <img src={require("../../assets/images/RocketBeam.png")} alt="star" id="beam"/>
              <img src={require("../../assets/images/Stars.png")} alt="star" id="stars"/>
              <div id="planets">
                <img src={require("../../assets/images/Planet.png")} alt="planet"/>
                <img src={require("../../assets/images/Planet.png")} alt="planet"/>
                <img src={require("../../assets/images/Planet.png")} alt="planet"/>
                <img src={require("../../assets/images/Planet.png")} alt="planet"/>
              </div>
            </div>
          </div>
          <div className="CrashInfo">
            <CrashPlayers />
            <CrashAmounts />
          </div>
        </div>

      </div>
    )
  }
}
