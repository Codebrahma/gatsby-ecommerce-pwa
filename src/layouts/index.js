import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

import './index.css'
import '../components/css/custom.scss';

const Layout = ({ children }) => (
  <header id="header">
    <nav className="header-nav">
      <div className="container">
        <div className="row">
          <div className="col-center col col-xs-12 col-lg-6 col-md-12">
            <div className="header-menu">
              <Navbar />
              <NavbarMobile />
            </div>
          </div>
          {children()}
        </div>
      </div>
    </nav>
  </header>

)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;
