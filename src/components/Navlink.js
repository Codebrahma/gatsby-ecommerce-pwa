import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropType from 'prop-types';

const NavLink = props => (
  <div className={`pt_menu nav-${props.position}-items`}>
    <div className="parentMenu">
      <GatsbyLink
        id={`link-style${props.position === 'right' ? '-right' : ''}`}
        exact
        to={props.linkTo}
        activeClassName={props.noActive ? '' : 'demo-active-link'}
      >
        {props.children || props.title}
      </GatsbyLink>
    </div>
  </div>
);

NavLink.propTypes = {
  linkTo: PropType.string.isRequired,
  position: PropType.oneOf(['left', 'right']),
  title: PropType.string,
  children: PropType.element,
};

NavLink.defaultProps = {
  title: 'Navlink default title',
  children: null,
  position: 'left',
};

export default NavLink;
