import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, }) => {
  return (
    <nav className="navbar bg-primary">

      <div className="inventory">

        <Link to="/ColdPress"> Cold-Press Juices </Link>
        <Link to="/FamilyPreps"> Family Prep Meals</Link>
        <Link to="/FarmersMarkets"> Farmer's Markets</Link>
        <Link to="/Deliveries"> Deliveries</Link>
        <Link to="/GoodWorks"> GoodWorks</Link>
        <Link to="/OfficeCatering"> OfficeCatering</Link>
        <Link to="/Cart">
          <i className="fa fa-cart-plus fa-3x" aria-hidden="true">
          </i>
        </Link>
      </div>

    </nav >
  )
};

export default Navbar
