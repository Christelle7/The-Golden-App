import React, { Component } from 'react';
import Nav from '../layout/Navbar';


export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
    }
  }
  addTotal = () => {
    var totale = 0
    console.log("prix", totale)
    this.props.cart.forEach(prix => {
      totale = totale + prix.itemPrice
      console.log("prix", prix.itemPrice)

    })
    this.setState({
      total: totale,
    })
  }
  componentDidMount() {
    this.addTotal();
  }
  render() {
    console.log(this.state)
    return (
      <div className="cartCash">
        <Nav />
        <div>
          New Journey, New Goals, New You!!
      </div>

        <div className="Cart">
          {this.props.cart.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.itemImage} width="100px" height="100px" />
                {item.itemName}
                ${item.itemPrice}
                <button onClick={() => {
                  this.props.removeFromCart(index)
                  this.addTotal();
                }}> Maybe Later </button>
              </div>
            )
          })}
        </div>
        <div className="CartTotal">
          <p>total: ${this.state.total}</p>
          <a href="http://www.paypal.me/ChristelleChalmers">
            <button onClick={() => {
              this.props.submitCart(this.props.cart)
            }}>
              Checkout</button> </a>
        </div>
      </div>
    )
  }
}
