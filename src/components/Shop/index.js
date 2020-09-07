import React, { Component } from 'react'
import LogoComponent from '../Global/LogoComponent';

import DropDown from './Dropdown';

const dummydata = [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2]

class index extends Component {
  render() {
    return (
      <div className="container">
        <LogoComponent />
        <div className="ShopContainer">
          <div className="ShopContent">
            <div className="ShopFilters">
              <div className="preset">
                <button className="button active">VGO</button>
                <button className="button">BTC</button>
                <button className="button">PayPal</button>
              </div>
              <div className="sort">
                <DropDown />
              </div>
            </div>
            <div className="ShopItems">
              {dummydata.map((p) => (
                <div className="ShopItem">
                  <img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png" alt="awp"/>
                  <h1>AWP | Dragon Lore</h1>
                  <p>(Factory New)</p>
                  <div className="Price">
                    <img src={require("../../assets/images/money.png")} alt="coin"/>
                    1500.00
                  </div>
                  <button>Buy</button>
                </div>
              ))}
            </div>
          </div>
          <div className="ShopCart">
            <div className="Header">
              Items: 3
            </div>
            <div className="Items">
              <div className="Item">
                <div className="Seperator"></div>
                <div className="Remove">X</div>
                <div className="ItemInfo">
                  <img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png" alt="awp"/>
                  <div className="ItemName">
                    <h1>AWP | Dragonlore234234</h1>
                    <p>(Factory New)</p>
                    <div className="Price">
                      <img src={require("../../assets/images/money.png")} alt="coin"/>
                      1500.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="Item">
                <div className="Seperator"></div>
                <div className="Remove">X</div>
                <div className="ItemInfo">
                  <img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png" alt="awp"/>
                  <div className="ItemName">
                    <h1>AWP | Dragonlore234234</h1>
                    <p>(Factory New)</p>
                    <div className="Price">
                      <img src={require("../../assets/images/money.png")} alt="coin"/>
                      1500.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="Item">
                <div className="Seperator"></div>
                <div className="Remove">X</div>
                <div className="ItemInfo">
                  <img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png" alt="awp"/>
                  <div className="ItemName">
                    <h1>AWP | Dragonlore234234</h1>
                    <p>(Factory New)</p>
                    <div className="Price">
                      <img src={require("../../assets/images/money.png")} alt="coin"/>
                      1500.00
                    </div>
                  </div>
                </div>
              </div>
              <div className="Item">
                <div className="Seperator"></div>
                <div className="Remove">X</div>
                <div className="ItemInfo">
                  <img src="https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png" alt="awp"/>
                  <div className="ItemName">
                    <h1>AWP | Dragonlore234234</h1>
                    <p>(Factory New)</p>
                    <div className="Price">
                      <img src={require("../../assets/images/money.png")} alt="coin"/>
                      1500.00
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="Buttons">
              <h1>Total: </h1>
              <div className="total">
                <img src={require("../../assets/images/money.png")} alt="coin"/>
                1500.00
              </div>
              <button>Withdraw Items</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default index;
