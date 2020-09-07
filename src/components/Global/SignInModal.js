import React, { Component } from 'react';
import Rodal from 'rodal';
import ReactSVG from 'react-svg';

const styles = {
  container: {
    background: "#2B343F",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    height: 315,
    width: 700,
  },
  main: {
    flex: 2,
    backgroundColor: "#2B343F",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: "flex",
    flexDirection: "column",
    paddingTop: 50,
  },

}

export default class SignInModal extends Component {
  render() {
    return (
      <Rodal 
        customStyles={styles.container} 
        enterAnimation="slideUp" 
        leaveAnimation="slideDown" 
        duration={300} 
        visible={this.props.isOpen} 
        onClose={() => this.props.hide("SignInModal")}
        closeOnEsc={true}
        showCloseButton={false}>
        <div className="SignUpModal">
          <div className="left">
            <h1>Login</h1>
            <div className="signinmethods">
              <div className="method">
                <img src={require("../../assets/images/steam.png")} width={28}/>
              </div>
              <div className="method">
                <img src={require("../../assets/images/opskins.png")} width={65}/>
              </div>
            </div>
            <div className="inputsection">
              <div className="input">
                <img src={require("../../assets/images/user.png")} alt="user"/>
                <input type="text" name="amount" placeholder="Username..."/>
              </div>
              <div className="input">
                <img src={require("../../assets/images/padlock.png")} alt="user"/>
                <input type="text" name="amount" placeholder="Password..."/>
              </div>
              <p>Forgot your Password?</p>
            </div>
            <div className="buttons">
              <button>Login</button>
            </div>
          </div>
          <div className="right">
            <h1>Welcome To</h1>
            <img src={require("../../assets/images/logo.png")} alt="logo"/>
          </div>
        </div>
      </Rodal>
    )
  }
}
