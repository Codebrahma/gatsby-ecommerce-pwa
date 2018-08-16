import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropTypes from 'prop-types';

const NavLink = ({
  position,
  linkTo,
  children,
  title,
  noActive,
}) => (
  <div className={`pt_menu nav-${position}-items`}>
    <GatsbyLink
      id={`link-style${position === 'right' ? '-right' : ''}`}
      exact
      to={linkTo}
      activeClassName={noActive ? '' : 'demo-active-link'}
      style={{ height: '100%' }}
    >
      {children || title}
    </GatsbyLink>
  </div>
);

NavLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.string,
  children: PropTypes.element,
  noActive: PropTypes.bool,
};

NavLink.defaultProps = {
  title: 'Navlink default title',
  children: null,
  position: 'left',
  noActive: false,
};

export default NavLink;
