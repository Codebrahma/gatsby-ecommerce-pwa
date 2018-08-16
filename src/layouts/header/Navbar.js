import React from 'react';
import PropTypes from 'prop-types';

import {
  Flex, Box, Hide,
} from 'rebass';
import NavLink from '../../components/Navlink';
import DropDown from './navbar/Dropdown';

import logo from '../../assets/images/logo-new.png';
import search from '../../assets/icons/search-solid.svg';


const Navbar = ({ cartLength }) => (
  <Hide medium small xsmall>
    <Flex>
      <Box width={1 / 6} mb={0} mr={5} px={3}>
        <div id="brand-logo" className="header_logo">
          <NavLink linkTo="/" noActive>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
      </Box>
      <Box width={5 / 6} mb={0}>
        <Flex px={0} alignItems="center" justifyContent="space-between">
          <Box width={5 / 9} mb={0}>
            <Flex className="pt_custommenu">
              <NavLink title="diet plan" linkTo="/category/diet-plan" />
              <NavLink title="breakfast" linkTo="/category/breakfast" />
              <NavLink title="lunch" linkTo="/category/lunch" />
              <NavLink title="Dinner" linkTo="/category/dinner" />
              <DropDown />
            </Flex>
          </Box>
          <Box className="pt_custommenu" width={2 / 9} mb={0}>
            <NavLink linkTo="/cart" title={`Cart(${cartLength || 0})`} noActive />
            <NavLink linkTo="/" noActive>
              <img src={search} className="icon" alt="search" />
            </NavLink>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </Hide>
);

Navbar.propTypes = {
  cartLength: PropTypes.number.isRequired,
};

export default Navbar;
