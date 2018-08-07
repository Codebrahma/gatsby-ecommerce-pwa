import React, { Component } from 'react'
import Link from 'gatsby-link'
import '../components/css/menuBarStyle.scss'
import logo from '../components/img/logo-new.png'
import Menu from './Menu.js';

class NavbarMobile extends Component {
  state = {
    displaySubMenu: false,
  }

  mainMenuClick = e => {
    document.getElementById('side-bar').style.left = this.state.displaySubMenu ? '-40vw' : '0 ';
    this.setState(prevState => ({
      displaySubMenu: !prevState.displaySubMenu,
    }))
  }
  render() {
    return (
      <div className="ma-nav-mobile-container">
        <div className="pt_custommenu_mobile" >
          <div id="brand-logo" className="header_logo col-left d-flex w-25">
            <Link to="/">
              <img className="logo img-responsive" src={logo} />
            </Link>
          </div>
          <div className="col-right col-3 right-menu">
            <div className="navbar bg-transparent">
              <div id="navbar-inner">
                <Link to="/">
                  <i className="fa fa-home icon-mobile" />
                </Link>

                <Link to="/cart">
                  <i className="fa fa-shopping-cart icon-mobile"/>
                </Link>
                <i className="fa fa-bars icon-mobile" onClick={this.mainMenuClick} />
                 <Menu headPath={this.props.headPath} toggleSidebar={this.mainMenuClick}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavbarMobile
