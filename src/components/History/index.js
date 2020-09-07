import React, { Component } from 'react'
import LogoComponent from '../Global/LogoComponent';
import Tabs from './Tabs';
import RouletteGames from './RouletteGames';
import CrashGames from './CrashGames';
import JackpotGames from './JackpotGames';

class History extends Component {
  render() { 
    return (
      <div className="container">
        <LogoComponent />
        <div className="HistoryContainer">
          <Tabs>
            <div label="Roulette">
              <RouletteGames />
            </div>
            <div label="Jackpot">
              <JackpotGames />
            </div>
            <div label="Crash">
              <CrashGames />
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default History