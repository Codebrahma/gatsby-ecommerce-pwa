import React from 'react'
import Link from 'gatsby-link'

const Navbar = (props) => (
  <div className="nav-container">
    <div className="nav-inner">
      <div id="pt_custommenu" className="pt_custommenu">
        <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
        <div className="parentMenu">
          <span className="fontcustom2">
            <Link exact to="/" activeClassName="active">HOME</Link>
          </span>
        </div>
      </div>
        <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/men" activeClassName="active">MEN</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu11" className="pt_menu nav-2 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/women" activeClassName="active">WOMEN</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu12" className="pt_menu nav-3 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/boys" activeClassName="active">BOYS</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu12" className="pt_menu nav-3 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/girls" activeClassName="active">GIRLS</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu12" className="pt_menu nav-3 nav-right-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/cart" activeClassName="active">
                Cart(
                  {
                    props.cartLength || 0
                  }
                )
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
