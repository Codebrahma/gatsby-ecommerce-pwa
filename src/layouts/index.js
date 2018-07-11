import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'

import './index.css'
import '../components/css/custom.scss'
import logo from '../components/img/nevara-responsive-prestashop-theme-logo-1525346533.jpg'

const Layout = ({ children }) => (
  <div>
    <header id="header">
      <nav className="header-nav">
        <div className="container">
          <div className="row">
            <div className="header_logo col-left col col-lg-3 col-md-12 col-xs-12">
              <a href="http://demo.posthemes.com/pos_nevara/layout3/">
                <img className="logo img-responsive" src={logo} alt="Nevara" />
              </a>
            </div>
            <div className="col-center col col-xs-12 col-lg-6 col-md-12">
              <div className="header-menu">
                <Navbar />
                <NavbarMobile />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
