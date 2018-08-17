import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Caps } from 'rebass';
import styled from 'styled-components';
import {
  position, zIndex, top, maxWidth, bottom, left, space, background,
} from 'styled-system';

const SideBar = styled.div`
  ${maxWidth}
  ${position}
  ${zIndex}
  ${top}
  ${bottom}
  ${left}
  ${space}
  ${background}
`;

const NavLink = ({ linkTo, title }) => (
  <Caps textAlign="center" py={3}>
    <Link to={`/category/${linkTo}`}>
      {title}
    </Link>
  </Caps>
);

const Menu = () => (
  <SideBar id="side-bar" maxWidth="30vw" position="fixed" zIndex={2} top={0} bottom={0} left="-40vw" background="white">
    <NavLink linkTo="diet-plan" title="diet plan" />
    <NavLink linkTo="lunch" title="lunch" />
    <NavLink linkTo="dinner" title="dinner" />
    <NavLink linkTo="skin-and-hair-plan" title="skin and hair" />
    <NavLink linkTo="skin-care-plan" title="skin care" />
    <NavLink linkTo="smoothie" title="smoothies" />
    <NavLink linkTo="others" title="other" />
  </SideBar>
);

NavLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Menu;
