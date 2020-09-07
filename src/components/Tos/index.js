import React, { Component } from 'react'
import LogoComponent from '../Global/LogoComponent';

const dummydata = [1, 2, 3, 4, 5]

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <LogoComponent />
        <div className="TosContainer">
          {dummydata.map((duh) => (
            <div className="TosItem">
              <h1>OwnerShip</h1>
              <p>
                By Using BETSKINS.gg, you acknowledge and accept the following Terms of Service in full and without reservation, you are agreeing to our Terms of Service and you are responsible
                for compliance with any applicable laws in your jurisdiction these Terms of Service govern your use of BETSKINS.gg.
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
