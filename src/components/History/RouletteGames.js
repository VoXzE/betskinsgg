import React, { Component } from 'react'
import posed from 'react-pose';

const num = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", ]

const Game = posed.div({
  open: { x: 0, opacity: 1, delay: 200},
  closed: { x: 300, opacity: 0 }
});

export default class RouletteGames extends Component {
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
      <div className="RouletteGames">
        {num.map((num) => (
        <Game className="RouletteGame" pose={this.state.isOpen ? 'open' : 'closed'}>
          <div className="top">
            <div className="GameID">
              Game ID: <span>#17551</span>
            </div>
            <div className="GameHash">
              Hash:: <span>16b758b51dd6a4d8bab57974c0334d84372dfce953d07c84127d083f92ab7abc</span>
            </div>
          </div>
          <div className="bottom">
            <div className="Secret">
              Secret: <span>IrfQo6b2T2bKqxfW</span>
            </div>
            <div className="Roll">
              Roll:: <span>14</span>
            </div>
          </div>
        </Game>
        ))}
      </div>
    )
  }
}
