import React, { Component } from 'react';
import drink from '../../images/coldpress.jpg';
import drinkTwo from '../../images/greenjuice.jpg';
import drinkThree from '../../images/strawberry.jpg';
import drinkFour from '../../images/citrus1.jpg';
import Nav from '../layout/Navbar';
export default class ColdPress extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Nav />
        <div className="row">

          <div className="coldPressed">
            <img src={drink} alt="drink" />
            Sunrise
             <button
              onClick={() => { this.props.addToCart({ itemName: "sunrise ", itemImage: drink, itemPrice: 8.50 }) }} >
              <i className="fa fa-cart-plus fa-3x" aria-hidden="true"></i>
            </button>
          </div>

          <div className="coldPressed">
            <img src={drinkTwo} alt="drinkTwo" />
            Sunrise juice2
             <button onClick={() => { this.props.addToCart({ itemName: "Green Pump", itemImage: drinkTwo, itemPrice: 8.50 }) }} >
              <i className="fa fa-cart-plus fa-3x" aria-hidden="true"></i>
            </button>
          </div>

        </div>

        <div className="row">

          <div className="coldPressed">
            <img src={drinkFour} alt="drinkFour" />
            Sunrise juice4
             <button onClick={() => { this.props.addToCart({ itemName: "Fresh Squeezed", itemImage: drinkFour, itemPrice: 8.00 }) }}>
              <i className="fa fa-cart-plus fa-3x" aria-hidden="true"></i>
            </button>
          </div>
          <div className="coldPressed">
            <img src={drinkThree} alt="drinkThree" />
            Sunrise juice3
             <button onClick={() => { this.props.addToCart({ itemName: "Berries and Mint", itemImage: drinkThree, itemPrice: 8.50 }) }}>
              <i className="fa fa-cart-plus fa-3x" aria-hidden="true"></i>
            </button>
          </div>


        </div >
      </div >
    )
  }
}
