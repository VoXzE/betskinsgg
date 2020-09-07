import React, { Component } from 'react';
import LogoComponent from '../Global/LogoComponent';
import PreviousWinner from './PreviousWinner';
import JackpotInfo from './JackpotInfo';
import JackpotBetAmounts from './JackpotBetAmounts';
import PlaceBetModal from '../Global/PlaceBetModal';
import WinnerModal from '../Global/WinnerModal';
import SignInModal from '../Global/SignInModal'

export class Jackpot extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      placeBetModal: false,
      winnerModal: false,
      amount: 0.00,
      PlayersInPot: ["1", "1", "1", "1", ],
      SignInModal: true,
    }
  }

  show = (modal) => {
    this.setState({ [modal]: true });
  }

  hide = (modal) => { 
    this.setState({ [modal]: false });
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClearBet = () => {
    this.setState({ amount: 0 });
  }

  handlePresetBet = (value) => {
    if (value === "double") return this.setState({ amount: this.state.amount * 2 });
    if (value === "half") return this.setState({ amount: this.state.amount / 2 });
    return this.setState({ amount: value + this.state.amount });
  }


  render() {
    return (
      <div className="container">
        <LogoComponent />
        <div className="JackpotContainer">
        {/* <button onClick={() => {
          let newArray = this.state.PlayersInPot.slice();
          newArray.push("1")
          this.setState({ PlayersInPot: newArray })
        }}>2342344</button> */}
          <div className="JackpotChart">
            <PlaceBetModal hide={this.hide} isOpen={this.state.placeBetModal} amount={this.state.amount} betPlaced={this.show}/>
            <WinnerModal hide={this.hide} isOpen={this.state.winnerModal} />
            <SignInModal hide={this.hide} isOpen={this.state.SignInModal} />

            <div className="JackpotChanceContainer">
              <div className="JackpotTimer">00:20</div>
              <div className="PlayerInPot purple">
                
              </div>
              <div className="PlayerInPot blue">
                
              </div>
              <div className="PlayerInPot red">
                
              </div>
              <div className="PlayerInPot yellow">
                
              </div>
            </div>

          </div>

          <div className="JackpotInfo">
            <JackpotInfo players={this.state.PlayersInPot}/> 
            <JackpotBetAmounts 
              amount={this.state.amount} 
              placeBet={() => this.show("placeBetModal")} 
              onChange={this.handleOnChange} 
              clearBet={this.handleClearBet}
              handlePresetBet={this.handlePresetBet}
              />
          </div>
        </div>
        <div className="jackpotHash">
          Round hash: 1b9e44dfb3145e6d244729497fa80b44b07220152805aac71bcb80938992c626 
        </div>
        <PreviousWinner />
      </div>
    )
  }
}

export default Jackpot
