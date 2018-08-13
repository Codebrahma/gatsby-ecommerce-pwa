import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './header/Navbar';
import NavbarMobile from './header/NavbarMobile';

import './header/style.scss';

const Header = ({ cartLength, headPath }) => (
  <header id="header" className="demo-header">
    <div className="px-5 demo-container">
      <div className="row">
        <div className="col-center col col-xs-12 col-sm-12 col-lg-12 col-md-12">
          <Navbar cartLength={cartLength} />
          <NavbarMobile
            headPath={headPath}
            cartLength={cartLength}
          />
        </div>
      </div>
    </div>
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
