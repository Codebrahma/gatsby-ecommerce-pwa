import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <div className="nav-container">
    <div className="nav-inner">
      <div id="pt_custommenu" className="pt_custommenu">
        <div id="pt_menu10" className="pt_menu nav-1">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/men">Men</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu11" className="pt_menu nav-2">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/women">Women</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu12" className="pt_menu nav-3">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/furniture">Furniture</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
