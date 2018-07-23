import React from 'react'
import Link from 'gatsby-link'

const Navbar = (props) => (
  <div className="nav-container">
    <div className="nav-inner">
      <div id="pt_custommenu" className="pt_custommenu">
        <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link exact to="/" activeClassName="active">Home</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/interiors" activeClassName="active">Interiors</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/furnitures" activeClassName="active">Furnitures</Link>
            </span>
          </div>
        </div>
        <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
          <div className="parentMenu">
            <span className="fontcustom2">
              <Link to="/lighting" activeClassName="active">Lighting</Link>
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
