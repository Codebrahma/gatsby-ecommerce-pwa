import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropTypes from 'prop-types';

const NavLink = ({
  linkTo,
  children,
  title,
  noActive,
}) => (
  <GatsbyLink
    to={linkTo}
    activeClassName={noActive ? '' : 'active-link'}
    className="nav-link"
  >
    {children || title}
  </GatsbyLink>
);

NavLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.element,
  noActive: PropTypes.bool,
};

NavLink.defaultProps = {
  title: 'Navlink default title',
  children: null,
  noActive: false,
};

export default NavLink;
