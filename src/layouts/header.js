import React from 'react'
import Link from 'gatsby-link'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'
import logo from '../components/img/nevara-responsive-prestashop-theme-logo-1525346533.jpg'

const Header = () => (
  <header id="header">
    <nav className="header-nav">
      <div className="container">
        <div className="row">
          <div className="col-center col col-xs-12 col-lg-12 col-md-12">
            <div className="header-menu">
              <Navbar />
              <NavbarMobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
