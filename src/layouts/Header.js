import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './header/Navbar';
import NavbarMobile from './header/NavbarMobile';

import './header/style.scss';

const Header = ({ cartLength, headPath }) => (
  <header id="header" className="demo-header">
    <Navbar cartLength={cartLength} />
    <NavbarMobile
      headPath={headPath}
      cartLength={cartLength}
    />
  </header>
);

Header.propTypes = {
  cartLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  headPath: PropTypes.string.isRequired,
};

Header.defaultProps = {
  cartLength: 0,
};

export default Header;
