import React, { Component } from 'react'
import LogoComponent from '../Global/LogoComponent';

const dummydata = [1, 2, 3, 4, 5]

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <LogoComponent />

        <div className="FaqContainer">
          {dummydata.map((duh) => (
            <div className="FaqItem">
              <h1>What is BetSkins.gg?</h1>
              <p>
                BETSKINS.gg is a brand new way to gamble CS: GO and more games skins.We are NOT a jackpot site– instead players deposit skins
                for credits and these points are then transferred to our site, bet those credits on our inspired games: roulette, crash, coinflip, jackpot.
              </p>
              <p>
                It doesn 't matter how big your inventory is, or how much you bet, your odds are always the same.
              </p>
              <p>
                Bets occur in real time, across the entire site, meaning you bet, win, and lose along with other players.
              </p>

              <p>
                All rolls are generated using a provably fair system– ensuring a fair roll each and every time.
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
