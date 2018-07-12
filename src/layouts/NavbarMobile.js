import React, { Component } from 'react'
import Menu from '../components/menu.js'

class NavbarMobile extends Component {
  state = {
    displaySubMenu: false,
  }

  mainMenuClick = e => {
    this.setState(prevState => ({
      displaySubMenu: !prevState.displaySubMenu,
    }))
  }
  render() {
    const { displaySubMenu } = this.state
    return (
      <div className="ma-nav-mobile-container hidden-lg-up">
        <div className="pt_custommenu_mobile">
          <div className="navbar">
            <div id="navbar-inner" className="navbar-inner navbar-inactive">
              <span className="btn-navbar" onClick={this.mainMenuClick}>
                Category
              </span>
              {displaySubMenu && <Menu />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavbarMobile
