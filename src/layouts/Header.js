import React from 'react';

import Navbar from './header/Navbar';
import NavbarMobile from './header/NavbarMobile';

import './header/style.scss';

const Header = props => (
  <header id="header" className="demo-header">
    <div className="px-5 demo-container">
      <div className="row">
        <div className="col-center col col-xs-12 col-sm-12 col-lg-12 col-md-12">
          <Navbar cartLength={props.cartLength} />
          <NavbarMobile
            headPath={props.headPath}
            cartLength={props.cartLength}
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
