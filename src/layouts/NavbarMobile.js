import React, { Component } from 'react'
import Link from 'gatsby-link'
import logo from '../components/img/logo-new.png'
import Menu from './Menu.js';

const NavbarMobile = (props) => (
      <div className="ma-nav-mobile-container">
        <div className="pt_custommenu_mobile" >
          <div id="brand-logo" className="header_logo col-left d-flex w-25">
            <Link to="/">
              <img className="logo img-responsive" src={logo} alt="logo"/>
            </Link>
          </div>
          <div className="col-right col-3 right-menu">
            <div className="navbar bg-transparent">
              <div id="navbar-inner">
                <Link to="/cart">
                  <i className="fa fa-shopping-cart icon-mobile"/>
                </Link>
                <i id="sidebar-menu-button" className="fa fa-bars icon-mobile" 
                tabIndex="1"
                />
                 <Menu headPath={props.headPath}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

export default NavbarMobile
