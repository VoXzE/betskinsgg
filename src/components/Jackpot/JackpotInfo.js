import React, { Component } from 'react'
import JackpotPlayer from './JackpotPlayer';
import ReactSVG from 'react-svg';

export default class JackpotInfo extends Component {

  componentWillReceiveProps(props) {
    console.log("called");
  }
  render() {
    const { players } = this.props;
    return (
      <div className="minicontainer">
        <div className="top">
          <div className="total">
            <img src={require("../../assets/images/money.png")} alt="coin"/>
            4800.00
          </div>
          <div className="totalPlayer">
            <ReactSVG src={require("../../assets/images/User.svg")} className="icon"/>
            5 Players
          </div>
          <div className="chance">
            <div className="color"></div>
            32% Chance
          </div>
        </div>

        <div className="bottom">
          <div className="PlayersInPotSection">
            <div className="t"></div>
              <div className="PlayersInPot">
              {players.map((player) => (
                <JackpotPlayer />
              ))}
              </div>
          </div>
        </div>

      </div>
    )
  }
}
