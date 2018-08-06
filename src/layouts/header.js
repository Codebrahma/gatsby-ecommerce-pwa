import React from 'react'
import Link from 'gatsby-link'
import Navbar from './Navbar'
import NavbarMobile from './NavbarMobile'

const Header = (props) => {
  return (
    <header id="header">
      <nav className="header-nav">
        <div className="container demo-container">
          <div className="row">
            <div className="col-center col col-xs-12 col-lg-12 col-md-12">
              <div className="header-menu">
                <Navbar 
                  cartLength={props.cartLength}
                />
                <NavbarMobile 
                  headPath={props.headPath}
                  cartLength={props.cartLength}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
