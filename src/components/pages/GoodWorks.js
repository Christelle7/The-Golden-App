import React, { Component } from 'react';
import adoptions from '../../images/adoptions.jpg';
import homeless from '../../images/homelessshelter.jpg';
import Nav from '../layout/Navbar';



export default class GoodWorks extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="GoodWorks">
          <img src={adoptions} alt="adoptions" />
        </div>
        <div className="GoodWorks">
          <img src={homeless} alt="homeless" />
        </div>
      </div>
    )
  }
}
