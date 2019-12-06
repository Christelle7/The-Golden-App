import React, { Component } from 'react';
import Nav from '../layout/Navbar';
import CateringOne from '../../images/catering1.jpg';
import CateringTwo from '../../images/catering2.jpg';

export default class OfficeCatering extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="OfficeCatering">
          <img src={CateringOne} alt="drink" />
          Italian Menu
             <button
            onClick={() => { this.props.addToCart({ itemName: "CateringOne ", itemImage: CateringOne, itemPrice: 300.00 }) }} >
            <i className="fa fa-cart-plus fa-3x" aria-hidden="true"></i>
          </button>
        </div>

        <div className="OfficeCatering">
          <img src={CateringTwo} alt="drink" />
          Carribean Menu
             <button
            onClick={() => { this.props.addToCart({ itemName: "CateringTwo ", itemImage: CateringTwo, itemPrice: 300.00 }) }} >
            <i className="fa fa-cart-plus fa-3x" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    )
  }
}
