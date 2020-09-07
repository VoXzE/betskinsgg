import React, { Component } from 'react'
import ReactSVG from 'react-svg';

class LogoComponent extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="FooterStats">
          <div className="Players">
            <h1>320,000</h1>
            <p>Unique Users</p>
          </div>
          <div className="WonTotal">
            <h1>$100,000</h1>
            <p>Won in Total</p>
          </div>
          <div className="BetsPlaced">
            <h1>5000</h1>
            <p>Bets Placed</p>
          </div>
        </div>
        <div className="FooterContent">
          <div className="MenuLinks">
            <h1>GameModes</h1>
            <ul>
              <li><a>Roulette</a></li>
              <li><a>Crash</a></li>
              <li><a>Jackpot</a></li>
              <li><a>MatchBetting</a></li>
            </ul>
          </div>
          <div className="MenuLinks">
            <h1>Profile</h1>
            <ul>
              <li><a>Settings</a></li>
              <li><a>History</a></li>
              <li><a>Support</a></li>
            </ul>
          </div>
          <div className="MenuLinks">
            <h1>Legal</h1>
            <ul>
              <li><a>FAQ</a></li>
              <li><a>About</a></li>
              <li><a>ToS</a></li>
              <li><a>Provably Fair</a></li>
            </ul>
          </div>
          <div className="MenuLinks">
            <h1>Games</h1>
            <ul>
              <li><a>League of Legends</a></li>
              <li><a>CS:GO</a></li>
              <li><a>HearthStone</a></li>
              <li><a>Dota 2</a></li>
            </ul>
          </div>
          <div className="MenuLinks address">
            <h1>BETSKINS.GG</h1>
            <p>
              BetSkins Limited <br/>
              Casino Street 10, Vegas<br/>
              United States
            </p>
          </div>
        </div>
        <div className="FooterSponsors">
          <h1>18+</h1>
          <ReactSVG src={require("../../assets/images/MastercardLogo.svg")} className="mastercard"/>
          <ReactSVG src={require("../../assets/images/SkrillLogo.svg")} className="skrill"/>
          <ReactSVG src={require("../../assets/images/Paysafe.svg")} className="paysafe"/>
          <img src={require("../../assets/images/BitcoinLogo.png")} className="bitcoin" alt="btc"/>
          <img src={require("../../assets/images/PaypalLogo.png")} className="bitcoin" alt="paypal"/>
        </div>
        <div className="FooterCopyRight">
          <p>Copyright 2019-2020 Betskins.gg. All rights reserved</p>
          <div className="UpArrow">
            <ReactSVG src={require("../../assets/images/Triangle.svg")} className="triangle"/>
          </div>

        </div>
      </div>
    )
  }
}

export default LogoComponent;
