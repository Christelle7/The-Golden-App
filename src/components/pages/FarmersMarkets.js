import React, { Component } from 'react';
import marketOne from '../../images/farmersmarket1.jpg';
import marketTwo from '../../images/farmersmarket2.jpg';
import marketThree from '../../images/farmersmarket3.jpg';
import Nav from '../layout/Navbar';



export default class FarmersMarkets extends Component {
  render() {
    return (
      <div className="Markets">
        <Nav />
        <div className="Farmers">
          <img src={marketOne} alt="marketOne" />
          FarmersMarkets Austin
        </div>
        <div className="Farmers">
          <img src={marketTwo} alt="marketTwo" />
          FarmersMarkets New Braunfels
        </div>
        <div className="Farmers">
          <img src={marketThree} alt="marketThree" />
          FarmersMarkets Boerne
        </div>

      </div>
    )
  }
}

