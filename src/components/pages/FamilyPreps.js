import React, { Component } from 'react';
import classOne from '../../images/familymeals1.jpg';
import classTwo from '../../images/familymeals4.jpg';
import classThree from '../../images/familymeals2.jpg';
import Nav from '../layout/Navbar';


export default class FamilyPreps extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Nav />
        <div className="rowWord">

          <div>
            <img src={classOne} alt="ClassOne" />
            Have you ever dreamed of making Healthier meals for you family , well here is you chance. Professional checf Christelle Chalmers is launching a family helathy meal prep clas that combines  cold-Press juicing, weekly meal preps with easy recipies tha involves cooking with the whole family
            <button
              onClick={() => { this.props.addToCart({ itemName: "FamilyMealPreps ", itemImage: classOne, itemPrice: 300.00 }) }} >
              <i className="fa fa-cart-plus fa-3x" aria-hidden="true"></i>
            </button>
          </div>

        </div>
        <div className="CookingClasses">
          <img src={classOne} alt="classOne" />
        </div>

        <div className="rowImages">



          <div className="CookingClasses">
            <img src={classTwo} alt="classTwo" />
          </div>

          <div className="CookingClasses">
            <img src={classThree} alt="classThree" />
          </div>


        </div>
      </div>
    )
  }
}



