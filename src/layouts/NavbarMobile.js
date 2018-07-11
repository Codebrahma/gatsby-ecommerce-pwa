import React from 'react'
import Menu from '../components/menu.js'

const NavbarMobile = () => (
  <div className="ma-nav-mobile-container hidden-lg-up">
    <div className="pt_custommenu_mobile">
      <div className="navbar">
        <div id="navbar-inner" className="navbar-inner navbar-inactive">
          <a className="btn-navbar">Category</a>
          <Menu />
        </div>
      </div>
    </div>
  </div>
)

export default NavbarMobile
