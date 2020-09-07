import React, { Component } from 'react'
import posed from 'react-pose';

const Game = posed.div({
  open: { opacity: 1, delay: 200},
  closed: { opacity: 0 }
});

class JackpotPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <Game className="PlayerInPot" pose={this.state.isOpen ? 'open' : 'closed'}>
        <img src={require("../../assets/images/Avatar.png")} alt="player"/>
        <h1>Solar Studios</h1>
        <h2>32%</h2>
        <div style={{display: "flex", flexDirection: "row"}}>
          <div className="total">
            <img src={require("../../assets/images/money.png")} alt="coin" />
            4800.00
          </div>
          <div className="color">
          </div>
        </div>
      </Game>
    )
  }
}

export default JackpotPlayer;