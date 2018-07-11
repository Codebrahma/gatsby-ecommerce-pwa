import React from 'react'

const Navbar = () => (
  <div className="nav-container">
    <div className="nav-inner">
      <div id="pt_custommenu" className="pt_custommenu">
        <div id="pt_menu" className="pt_menu">
          <div className="parentMenu">
            <a className="fontcustom2" href="/pos_nevara/layout3/">
              <span>Men</span>
            </a>
          </div>
        </div>
        <div id="pt_menu" className="pt_menu act nav-1">
          <div className="parentMenu">
            <a
              href="http://demo.posthemes.com/pos_nevara/layout3/en/10-shop"
              className="fontcustom2"
            >
              <span>Women</span>
              <i className="icon-caret-down" />
            </a>
          </div>
        </div>
        <div id="pt_menu" className="pt_menu">
          <div className="parentMenu">
            <a className="fontcustom2" href="/pos_nevara/layout3/">
              <span>Furniture</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
