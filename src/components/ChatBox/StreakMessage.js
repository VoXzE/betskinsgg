import React, { Component } from 'react'

export default class StreakMessage extends Component {
  render() {
    return (
      <div className="StreakMessage">
        <h1>Black Train! 5 Blacks in a row!</h1>
        <div className="StreakRolls">
          <div className="blackRoll">14</div>
          <div className="blackRoll">14</div>
          <div className="blackRoll">14</div>
          <div className="blackRoll">14</div>
          <div className="blackRoll">14</div>
          <div className="redRoll">5</div>
        </div>
        <button className="btn">Place a bet</button>
      </div>
    )
  }
}
