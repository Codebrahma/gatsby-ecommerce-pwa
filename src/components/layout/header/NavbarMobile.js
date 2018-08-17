import React from 'react';

import { Row, Column, Hide } from 'rebass';
import Menu from './Menu';
import NavLink from '../../Navlink';
import BackButtonWithRouter from './BackButton';

import logo from '../../../assets/images/logo-new.png';
import cart from '../../../assets/icons/shopping-cart-solid.svg';
import menu from '../../../assets/icons/bars-solid.svg';

const NavbarMobile = () => (
  <Hide xlarge large>
    <Row>
      <Column flex="0.5 auto" mb={0} p={3}>
        {(window.location.pathname !== '/') && <BackButtonWithRouter />}
      </Column>
      <Column flex="20 auto" mb={0}>
        <div id="brand-logo" className="header_logo">
          <NavLink linkTo="/" noActive>
            <img className="logo img-responsive" src={logo} alt="logo" />
          </NavLink>
        </div>
      </Column>
      <Column flex="0.5 auto" mb={0}>
        <Row p={3}>
          <Column mb={0}>
            <NavLink position="left" linkTo="/cart" noActive>
              <img src={cart} height="auto" width="20" alt="cart" />
            </NavLink>
          </Column>
          <Column mb={0}>
            <img
              src={menu}
              id="sidebar-menu-button"
              height="20"
              width="auto"
              alt="menu"
              tabIndex={0}
            />
            <Menu />
          </Column>
        </Row>
      </Column>
    </Row>
  </Hide>
);


export default NavbarMobile;
