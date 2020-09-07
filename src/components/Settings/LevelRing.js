import React, { Component } from 'react'

export default class LevelRing extends Component {
  constructor(props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress } = this.props;
    const strokeDashoffset = this.circumference - progress / 100 * this.circumference;
    return (
      <div className = "levelCircle" >
        <svg
          height={radius * 2}
          width={radius * 2}
          >
          <circle
            // class = "levelCircle"
            stroke="#73DAFF"
            fill="transparent"
            strokeWidth={ stroke }
            strokeDasharray={ this.circumference + ' ' + this.circumference }
            style={ { strokeDashoffset } }
            stroke-width={ stroke }
            r={ this.normalizedRadius }
            cx={ radius }
            cy={ radius }
            stroke-linecap="round"
            />
        </svg>
      </div>
    )
  }
}
