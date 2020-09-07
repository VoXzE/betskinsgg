import React, { Component } from 'react'
import LogoComponent from '../Global/LogoComponent';
import LevelRing from './LevelRing';
import Switch from "react-switch";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelPercent: 63,
      soundEnabled: true,
      steamPrivate: false,
    }
  }

  handleChange = (checked) =>  {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="container">
        <LogoComponent />
        <div className="ProfileContainer">
          <div className="ProfileStats">
            <div className="totalWins">
              <h1>$0.00</h1>
              <p>Total Wins</p>
            </div>
            <div className="totalBets">
              <h1>0</h1>
              <p>Total Bets</p>
            </div>
            <div className="profileName">
              <div className="picture">
                <img src="https://pixel.nymag.com/imgs/daily/vulture/2017/11/27/27-lil-pump.w700.h700.jpg" alt="avatar"/>
                <LevelRing
                  radius={ 75 }
                  stroke={ 5 }
                  progress={ this.state.levelPercent }
                />
              </div>
              <h1>Solar Studios</h1>
              <p>Level 6 (300/700XP)</p>
            </div>
            <div className="totalLost">
              <h1>$0.00</h1>
              <p>Total Lost</p>
            </div>
            <div className="totalProfit">
              <h1>$0.00</h1>
              <p>Total Profit</p>
            </div>
          </div>
          <div className="ProfileSettings">

            <form onSubmit={this.handleSubmit}>
              <div className="inputContainer">
                <div className="inputLabel">
                  Trade-URL OPSkins <span>(?)</span>
                </div>
                <div className="Input">
                  <input type="text" placeholder="Enter your Trade-URL…"/>
                  <button>Save</button>
                </div>
                <a>Click here to find your Trade-URL</a>
              </div>
              <div className="inputContainer">
                <div className="inputLabel">
                  Trade-URL OPSkins <span>(?)</span>
                </div>
                <div className="Input">
                  <input type="text" placeholder="Enter your Trade-URL…"/>
                  <button>Save</button>
                </div>
                <a>Click here to find your Trade-URL</a>
              </div>

              <div className="ToggleSwitches">
              <div className="ToggleSound">
                <h1>Sound  <span>(?)</span></h1>
                <Switch onChange={this.handleChange} checked={this.state.soundEnabled} width={75} height={35} onHandleColor="#73DAFF" offHandleColor="#4C646C"/>
              </div>
              <div className="PrivateSteam">
                <h1>Private Steam <span>(?)</span></h1>
                <Switch onChange={this.handleChange} checked={this.state.steamPrivate} width={75} height={35} onHandleColor="#73DAFF" offHandleColor="#4C646C"/>
              </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    )
  }
}

export default index;