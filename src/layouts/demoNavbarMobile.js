import React, { Component } from 'react'
import Link from 'gatsby-link'
import '../components/css/menuBarStyle.scss'
import logo from '../components/img/nevara-responsive-prestashop-theme-logo-1525346533.jpg'
import DemoMenu from './demoMenu.js';

class DemoNavbarMobile extends Component {
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
                 <DemoMenu headPath={this.props.headPath} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DemoNavbarMobile
