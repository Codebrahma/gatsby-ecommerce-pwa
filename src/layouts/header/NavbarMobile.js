import React from 'react'
import Link from 'gatsby-link'
import logo from '../../assets/images/logo-new.png'
import Menu from './Menu';
import cart from '../../assets/icons/shopping-cart-solid.svg'
import menu from '../../assets/icons/bars-solid.svg'

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
                  <img src={cart} className="icon icon-mobile" alt="icon"/>
                </Link>
                <img src={menu} id="sidebar-menu-button" className="icon icon-mobile" alt="icon" 
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
