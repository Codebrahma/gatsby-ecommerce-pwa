import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';
import NavLink from '../../components/Navlink';
import BackButtonWithRouter from './BackButton';
import { Row, Column } from 'rebass';

import logo from '../../assets/images/logo-new.png';
import cart from '../../assets/icons/shopping-cart-solid.svg';
import menu from '../../assets/icons/bars-solid.svg';

const NavbarMobile = (props) => (
  <div className="pt_custommenu_mobile">
    <Row>
      <Column flex='0.5 auto' mb={0} p={3}>
        {props.headPath !== '/' && <BackButtonWithRouter />}
      </Column>
      <Column flex='20 auto' mb={0}>
        <div id="brand-logo" className="header_logo">
          <NavLink linkTo="/" noActive>
            <img className="logo img-responsive" src={logo} alt="logo" />
          </NavLink>
        </div>
      </Column>
      <Column flex='0.5 auto' mb={0}>
        <Row p={3}>
          <Column mb={0}>
          <NavLink position="left" linkTo="/cart" noActive >
            <img src={cart} className="icon icon-mobile" alt="cart" />
          </NavLink>
          </Column>
          <Column mb={0}>
          <Menu headPath={props.headPath} />
          <img src={menu} id="sidebar-menu-button" className="icon icon-mobile" alt="menu"
            tabIndex="1"
          />
          </Column>
          </Row>
      </Column>
    </Row>
  </div>
)

export default NavbarMobile;
