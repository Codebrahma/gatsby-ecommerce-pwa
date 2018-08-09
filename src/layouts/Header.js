import React from 'react'
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import './style.scss';

const Header = (props) => {
  return (
    <header id="header" className="demo-header">
      <div className="container demo-container">
        <div className="row">
          <div className="col-center col col-xs-12 col-sm-12 col-lg-12 col-md-12">
            <Navbar
              cartLength={props.cartLength}
            />
            <NavbarMobile
              headPath={props.headPath}
              cartLength={props.cartLength}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
