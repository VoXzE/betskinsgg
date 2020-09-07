import React, { Component } from 'react'
import LogoComponent from '../Global/LogoComponent';
import $ from 'jquery';
import TimerRing from './TimerRing';
import Blackbets from './Blackbets';
import Greenbets from './Greenbets';
import Redbets from './Redbets';

export default class index extends Component {

  roll = (count, d) => {
    $(".progress-bar").each(function(){
  var bar = $(this).find(".bar");
  var val = $(this).find("span");
  var per = parseInt( val.text(), 10);
  var $right = $('.right');
  var $back = $('.back');

  $({p:0}).animate({p:per}, {
    duration: 3000,
    step: function(p) {
      bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)"
      });
      val.text(p|0);
    }
  }).delay( 200 );
  
  if (per == 100) {
   	$back.delay( 2600 ).animate({'top': '18px'}, 200 );
  }
      
  if (per == 0) {
  	$('.left').css('background', 'gray');
  }
  
  
});
  }

  render() {
    return (
      <div className="container">
        {/* <LogoComponent /> */}
        <div className="RouletteContainer">
          <div className="Top">
            <div className="SpinnerWrapper">
              <div className="Spinner">
                <img id="wheel" src={require("../../assets/images/roulettespinner.png")} alt="spinner"/>
                <div className="Info">

                </div>
              </div>
            </div>
          </div>

          <div className="Bottom">
            <div className="betoptions">
              <div className="total">
                <img src={require("../../assets/images/money.png")} alt="coin"/>
                <input type="text" name="amount" placeholder="0.00"/>
                <button className="clearBtn">CLEAR</button>
              </div>
              <div className="PresetAmounts">
                <button className="presetBtn">+10</button>
                <button className="presetBtn">+100</button>
                <button className="presetBtn">+1k</button>
                <button className="presetBtn">+10k</button>
                <button className="presetBtn">+100k</button>
                <button className="presetBtn">1/2</button>
                <button className="presetBtn">x2</button>
                <button className="presetBtn MAX">MAX</button>
              </div>
              <div className="recentrolls">
                <div className="circle rollBlack"/>
                <div className="circle rollBlack"/>
                <div className="circle rollGreen"/>
                <div className="circle rollRed"/>
                <div className="circle rollRed"/>

              </div>

            </div>
            <div className="allbets">
              <Blackbets />
              <Greenbets />
              <Redbets />
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}
