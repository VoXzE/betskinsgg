import React, { Component } from 'react';
import LogoComponent from '../Global/LogoComponent';
import FooterComponent from '../Global/FooterComponent';
import ReactSVG from 'react-svg';

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <LogoComponent />
        <div className="FairContainer">
          <p>
            BETSKINS.gg uses provably fair method, that doesn't allow us to manipulate the outcome 
            once the game is started, below you can see how the hash is caluclated. you can execute PHP 
            code straight from your web browser with tools like PHP Tester. Simply copy-paste 
            the code into the window and replace the values for your own. Execute the code to verify the hash.
          </p>

          <div className="FairGameModes">
            <div className="FairRow">
              <div className="FairGame">
                <div className="Header">
                  <ReactSVG src={require("../../assets/images/Moneybag.svg")} className="icon"/>
                  <h1>Jackpot</h1>
                </div>
                <div className="Main">
                  <img src={require("../../assets/images/fair.png")} alt="fair"/>
                </div>
              </div>
              <div className="FairGame">
                <div className="Header">
                  <ReactSVG src={require("../../assets/images/Roulette.svg")} className="icon"/>
                  <h1>Roulette</h1>
                </div>
                <div className="Main">
                  <img src={require("../../assets/images/fair.png")} alt="fair"/>
                </div>
              </div>
            </div>
            <div className="FairRow">
              <div className="FairGame">
                <div className="Header">
                  <ReactSVG src={require("../../assets/images/Rocket.svg")} className="icon rocket"/>
                  <h1>Crash</h1>
                </div>
                <div className="Main">
                  <img src={require("../../assets/images/fair.png")} alt="fair"/>
                </div>
              </div>
              <div className="FairGame">
                <div className="Header">
                  <ReactSVG src={require("../../assets/images/Trophy.svg")} className="icon"/>
                  <h1>Match Betting</h1>
                </div>
                <div className="Main">
                  <img src={require("../../assets/images/fair.png")} alt="fair"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <FooterComponent /> */}
      </div>
    )
  }
}
