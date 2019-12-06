import React, { Component } from 'react';
import Nav from '../layout/Navbar';
import Boerne from '../../images/farmersmarket1.jpg';
import NewBraunfels from '../../images/farmersmarket2.jpg';
import AustinDowntown from '../../images/farmersmarket3.jpg';

export default class Deliveries extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Nav />

        <div className="Deliveries">
          <img src={AustinDowntown} alt="drink" />
          Sunrise
             <button
            onClick={() => { this.props.addToCart({ itemName: "AustinDowntown ", itemImage: AustinDowntown, itemPrice: 18.50 }) }} >
            <i className="fa fa-cart-plus fa-3x" aria-hidden="true"></i>
          </button>
        </div>

        <div className="Deliveries">
          <img src={Boerne} alt="drink" />
          Sunrise
             <button
            onClick={() => { this.props.addToCart({ itemName: "Boerne Delivery ", itemImage: Boerne, itemPrice: 18.50 }) }} >
            <i className="fa fa-cart-plus fa-3x" aria-hidden="true"></i>
          </button>
        </div>

        <div className="Deliveries">
          <img src={NewBraunfels} alt="drink" />
          Sunrise
             <button
            onClick={() => { this.props.addToCart({ itemName: "NewBraunfels ", itemImage: NewBraunfels, itemPrice: 18.50 }) }} >
            <i className="fa fa-cart-plus fa-3x" aria-hidden="true"></i>
          </button>
        </div>



      </div>
    )
  }
}
