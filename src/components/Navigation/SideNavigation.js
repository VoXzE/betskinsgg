import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import ReactSVG from 'react-svg';

export class SideNavigation extends Component {
  render() {
    return (
      <div className="SideNavigation">

        <div className="SideHeader">
          <div className="ProfilePicture">
            <img src={require("../../assets/images/Avatar.png")} alt="profile"/>
            <div className="Level">7</div>
          </div>
          <div className="SideUserInfo">
            <h1>Solar Studios</h1>
            <div className="SideUserBottom">
              <div className="SideBalance">
                <img src={require("../../assets/images/money.png")} alt="bal"/>
                <h1>1500.00</h1>
              </div>
              <div className="AddBalance">
                <img src={require("../../assets/images/plus.png")} alt="plus" width={18}/>
              </div>
            </div>
          </div>
         </div>
         
         <div className="SideNavigationLinks">
          <ul>
            <li>
              <NavLink to="/roulette" activeClassName="SideNavigationActive">
                <ReactSVG src={require("../../assets/images/Roulette.svg")} className="SideNavigationIcon"/>
                <h1>Roulette</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/crash" activeClassName="SideNavigationActive">
                <ReactSVG src={require("../../assets/images/Rocket.svg")} className="SideNavigationIcon Rocket"/>
                <h1>Crash</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact={true} activeClassName="SideNavigationActive">
                <ReactSVG src={require("../../assets/images/Moneybag.svg")} className="SideNavigationIcon"/>
                <h1>Jackpot</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/matchbetting" activeClassName="SideNavigationActive">
                <ReactSVG src={require("../../assets/images/Trophy.svg")} className="SideNavigationIcon"/>
                <h1>Match Betting</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" activeClassName="SideNavigationActive">
                <ReactSVG src={require("../../assets/images/Settings.svg")} className="SideNavigationIcon"/>
                <h1>Settings</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" activeClassName="SideNavigationActive">
                <ReactSVG src={require("../../assets/images/Basket.svg")} className="SideNavigationIcon"/>
                <h1>Item Shop</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/history" activeClassName="SideNavigationActive">
                <ReactSVG src={require("../../assets/images/History.svg")} className="SideNavigationIcon"/>
                <h1>History</h1>
              </NavLink>
            </li>
          </ul>
         </div>

         <div className="SideNavigationReward">
          <ReactSVG src={require("../../assets/images/treasure.svg")} className="SideNavigationRewardIcon"/>
          <h1>You got <span>1 Reward!</span></h1>
         </div>

         <div className="SideNavigationFooter">
          <ul>
            <li><NavLink to="/fair" activeClassName="ActiveClass">Provably Fair</NavLink></li>
            <li><NavLink to="/faq" activeClassName="ActiveClass">FAQ</NavLink></li>
            <li><NavLink to="/tos" activeClassName="ActiveClass">Terms of Service</NavLink></li>
            <li><NavLink to="/support" activeClassName="ActiveClass">Support</NavLink></li>
          </ul>
         </div>
      </div>
    )
  }
}

export default SideNavigation
