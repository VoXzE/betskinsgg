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
  footer: {
    display: "flex",
    backgroundColor: "#1D2834",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 45,
    paddingLeft: 45,
    justifyContent: "center",
    position: "relative"
  },
  confirm: {
    border: "none",
    backgroundColor: "#73DAFF",
    color: "#fff",
    borderRadius: 7,
    width: 125,
    height: 40,
  },

  header: {
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  message: {
    color: "#506477",
    fontSize: 15,
    textAlign: "center",
    padding: 0,
    margin: 0,
    fontWeight: 500,
  },
  wonBox: {
    backgroundColor: "#212932",
    display: "flex",
    alignItems: "center",
    marginLeft: 125,
    marginRight: 125,
    borderRadius: 7,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 50,
  },
  wonBoxText: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 18, 
  },
  coin: {
    width: 23,
    height: 23,
    marginRight: 10
  },
  hash: {
    color: "#495B6D",
    textAlign: "center",
    marginTop: 35,
    fontWeight: 700,
    marginBottom: 50,
  },
  svg: {
    fill: "#506477",
    width: 20,
    position: "absolute",
    right: 25,
    bottom: 20,
  }

}

export default class WinnerModal extends Component {
  render() {
    return (
      <Rodal 
        customStyles={styles.container} 
        enterAnimation="slideUp" 
        leaveAnimation="slideDown" 
        duration={300} 
        visible={this.props.isOpen} 
        onClose={() => this.props.hide("winnerModal")}
        closeOnEsc={true}
        showCloseButton={false}>
        <div style={styles.main}>
          <h1 style={styles.header}>Congratulations! You’ ve won</h1>
          <p style={styles.message}>The balance will be credited to your balance <br />instantly. Enjoy your win!</p>

          <div style={styles.wonBox}>
            <img src={require("../../assets/images/money.png")} alt="coin" style={styles.coin}/>
            <h1 style={styles.wonBoxText}>1500.00</h1>
          </div>

          <div style={styles.hash}>
            GameID: #4420
          </div>
        </div>
        <div style={styles.footer}>
          <button style={styles.confirm} onClick={() => this.props.hide("winnerModal")}>Confirm</button>
          <ReactSVG src={require("../../assets/images/Share.svg")} style={styles.svg}/>
        </div>
      </Rodal>
    )
  }
}
