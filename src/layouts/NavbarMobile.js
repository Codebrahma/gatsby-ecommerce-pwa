import React, { Component } from 'react'
import Link from 'gatsby-link'
import Menu from '../components/menu.js'
import '../components/css/menuBarStyle.scss'

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
            <div id="navbar-inner" className={displaySubMenu ? 'expanded' : ''}>
              <Link to="/">
                <span className="btn-home left-item"></span>
              </Link>
                <span className="btn-toggle right-item" onClick={this.mainMenuClick}></span>

              <Link to="/cart">
                <span className="cart-count">
                  ({this.props.cartLength || 0})
                </span>
                <span className="btn-cart right-item"></span>
              </Link>

              {displaySubMenu && <Menu headPath={this.props.headPath}/>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavbarMobile
