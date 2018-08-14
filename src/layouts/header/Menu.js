import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { Text } from 'rebass';

const NavLink = ({ linkTo, title }) => (
  <Text textAlign="center">
    <Link to={`/category/${linkTo}`}>
      {title}
    </Link>
  </Text>
);

const Menu = () => (
  <div id="side-bar" className="bg-white">
    <NavLink linkTo="diet-plan" title="diet plan" />
    <NavLink linkTo="lunch" title="lunch" />
    <NavLink linkTo="dinner" title="dinner" />
    <NavLink linkTo="skin-and-hair-plan" title="skin and hair" />
    <NavLink linkTo="skin-care-plan" title="skin care" />
    <NavLink linkTo="smoothie" title="smoothies" />
    <NavLink linkTo="others" title="other" />
  </div>
);

NavLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Menu;
