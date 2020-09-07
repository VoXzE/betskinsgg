import React, { Component } from 'react';
import Rodal from 'rodal';
import ReactSVG from 'react-svg';

const styles = {
  container: {
    background: "#2B343F",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 3,
    backgroundColor: "#2B343F",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  footer: {
    flex: 0.7,
    display: "flex",
    backgroundColor: "#1D2834",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 45,
    paddingLeft: 45,
  },
  youWonTxt: {
    color: "#fff",
    display: "flex",
    fontSize: 18,
  },
  coin: {
    margin: "0 5px",
    width: 18,
    height: 18,
  },
  warnTxt: {
    display: "flex",
    flexDirection: "row",
    color: "#506477", 
    fontSize: 15,
    alignItems: "center",
    marginTop: 26,
    paddingLeft: 45,
    width: "100%",
    fontWeight: 500,
  },
  svg: {
    width: 32,
    fill: "#506477",
    marginRight: 15,
  },
  cancel: {
    flex: 1,
    marginRight: 15,
    border: "none",
    backgroundColor: "#6D7D90",
    color: "#fff",
    borderRadius: 10,
    padding: 10
  },
  confirm: {
    flex: 1,
    border: "none",
    backgroundColor: "#73DAFF",
    color: "#fff",
    borderRadius: 10,
  }

}

export default class PlaceBetModal extends Component {
  render() {
    return (
      <Rodal 
        customStyles={styles.container} 
        enterAnimation="slideUp" 
        leaveAnimation="slideDown" 
        duration={300} 
        visible={this.props.isOpen} 
        onClose={() => this.props.hide("placeBetModal")}
        closeOnEsc={true}
        showCloseButton={false}>
        <div style={styles.main}>
          <div style={styles.youWonTxt}>
            You’ re about to bet
            <img src={require("../../assets/images/money.png")} style={styles.coin} alt="coin"/>
            {this.props.amount}
          </div>
          <div style={styles.warnTxt}>
            <ReactSVG src={require("../../assets/images/Attention.svg")} style={styles.svg}/>
            All bets are final and can not be <br />canceled or refunded
          </div>
        </div>
        <div style={styles.footer}>
          <button style={styles.cancel} onClick={() => this.props.hide("placeBetModal")}>Cancel</button>
          <button style={styles.confirm} onClick={() => {
            this.props.hide("placeBetModal")
            this.props.betPlaced("winnerModal")
          }}>Confirm</button>
        </div>
      </Rodal>
    )
  }
}
