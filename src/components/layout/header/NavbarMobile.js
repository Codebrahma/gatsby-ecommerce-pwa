import React from 'react';
import { Row, Column, Hide } from 'rebass';
import PropType from 'prop-types';
import styled from 'styled-components';

import Menu from './Menu';
import NavLink from '../../Navlink';
import BackButtonWithRouter from './BackButton';

import logo from '../../../assets/images/logo-new.png';
import cart from '../../../assets/icons/shopping-cart-solid.svg';
import menu from '../../../assets/icons/bars-solid.svg';

const SideMenuButton = styled.img`
  cursor: pointer;
  &:focus+#side-bar {
      left: 0vw !important;
  }
`;

const NavbarMobile = ({ headPath }) => (
  <Hide xlarge large>
    <Row>
      {(headPath !== '/') && <BackButtonWithRouter />}
      <Column flex="2 auto" mb={0} mt={2}>
        <div id="brand-logo">
          <NavLink linkTo="/" noActive>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
      </Column>
      <Column flex="0.5 auto" mb={0}>
        <Row p={1}>
          <Column mb={0}>
            <NavLink position="left" linkTo="/cart" noActive>
              <img src={cart} height="auto" width="20" alt="cart" />
            </NavLink>
          </Column>
          <Column mb={0} mt={10}>
            <SideMenuButton
              src={menu}
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

NavbarMobile.propTypes = {
  headPath: PropType.string.isRequired,
};


export default NavbarMobile;
