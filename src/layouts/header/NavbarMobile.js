import React from 'react'

import Menu from './Menu';
import NavLink from '../../components/Navlink';
import BackButtonWithRouter from './BackButton';

import logo from '../../assets/images/logo-new.png'
import cart from '../../assets/icons/shopping-cart-solid.svg'
import menu from '../../assets/icons/bars-solid.svg'

const NavbarMobile = (props) => (
    <div className="ma-nav-mobile-container">
      <div className="pt_custommenu_mobile" >
      { props.headPath !== '/' && <BackButtonWithRouter />}
        <div id="brand-logo" className="header_logo">
          <NavLink linkTo="/" noActive>
            <img className="logo img-responsive" src={logo} alt="logo"/>
          </NavLink>
        </div>
        <div className="col-right col-3 right-menu">
          <div className="navbar bg-transparent">
            <div id="navbar-inner">
              <NavLink position="left" linkTo="/cart" noActive >
                <img src={cart} className="icon icon-mobile" alt="cart"/>
              </NavLink>
              <img src={menu} id="sidebar-menu-button" className="icon icon-mobile" alt="menu" 
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
