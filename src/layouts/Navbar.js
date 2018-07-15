import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <div className="nav-container">
    <div className="nav-inner">
      <div id="pt_custommenu" className="pt_custommenu">
        <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
        <div className="parentMenu">
          <span className="fontcustom2">
            <Link to="/">HOME</Link>
          </span>
        </div>
      </div>
        <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/men">MEN</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu11" className="pt_menu nav-2 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/women">WOMEN</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu12" className="pt_menu nav-3 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/boys">BOYS</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu12" className="pt_menu nav-3 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/girls">GIRLS</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu12" className="pt_menu nav-3 nav-right-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/cart">
                Cart
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
