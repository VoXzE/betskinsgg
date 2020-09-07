import React, { Component } from 'react'

class LogoComponent extends Component {
  render() {
    return (
      <div className="LogoContainer">
        <img src={require("../../assets/images/logo.png")} alt="logo"/>
      </div>
    )
  }
}

export default LogoComponent;
