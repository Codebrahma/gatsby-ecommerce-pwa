import React from 'react';
import PropTypes from 'prop-types';

import { Row, Column } from 'rebass';
import NavLink from '../../components/Navlink';
import DropDown from './navbar/Dropdown';

import logo from '../../assets/images/logo-new.png';
import search from '../../assets/icons/search-solid.svg';


const Navbar = ({ cartLength }) => (
  <div className="nav-container">
    <Row>
      <Column mb={0}>
        <div id="brand-logo" className="header_logo">
          <NavLink linkTo="/" noActive>
            <img className="logo img-responsive" src={logo} alt="logo" />
          </NavLink>
        </div>
      </Column>
      <Column mb={0}>
        <Row px={0}>
          <Column mb={0} pt={1}>
            <div className="pt_custommenu" id="navmenu">
              <NavLink title="diet plan" linkTo="/category/diet-plan" position="left" />
              <NavLink title="breakfast" linkTo="/category/breakfast" position="left" />
              <NavLink title="lunch" linkTo="/category/lunch" position="left" />
              <NavLink title="Dinner" linkTo="/category/dinner" position="left" />
              <DropDown />
            </div>
          </Column>
          <Column pt={3} px={5} mb={0}>
            <div style={{ display: 'inline-block', float: 'right' }}>
              <NavLink linkTo="/cart" title={`Cart(${cartLength || 0})`} position="right" noActive />
              <NavLink linkTo="/" position="right" noActive>
                <img src={search} className="icon" alt="search" />
              </NavLink>
            </div>
          </Column>
        </Row>
      </Column>
    </Row>
  </div>
);

Navbar.propTypes = {
  cartLength: PropTypes.number.isRequired,
};

export default Navbar;
