import React, { Component } from 'react'

export default class TeamItem extends Component {
  render() {
    return (
      <div className="BetSlip">
        <div className="Color"></div>
        <img src={require("../../assets/images/team.png")} alt="team"/>
        <div className="Info">
          <h1>Team Solar</h1>
          <h2>1.5x</h2>
        </div>

      </div>
    )
  }
}
