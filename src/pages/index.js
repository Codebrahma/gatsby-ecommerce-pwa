import React from 'react'
import Link from 'gatsby-link'

import styles from '../components/css/custom.scss';

const IndexPage = () => (
  <div>
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
            <a href="http://demo.posthemes.com/pos_nevara/layout3/en/10-shop" className="fontcustom2">
              <span>Women</span>
              <i className="icon-caret-down"></i>
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
  <div className="header-menu">
  <div className="ma-nav-mobile-container hidden-lg-up">
  <div className="navbar">
    <div id="navbar-inner" className="navbar-inner navbar-inactive">
    <a className="btn-navbar">Category</a>
    <ul id="pt_custommenu_itemmobile" className="tree dhtml  mobilemenu nav-collapse collapse">
      <li>
        <a href="http://demo.posthemes.com/pos_nevara/layout3/en/10-shop">Shop </a>
        <ul className="dhtml">
          <li>
            <a href="http://demo.posthemes.com/pos_nevara/layout3/en/13-art-gallery">Art Gallery </a>
            <ul>
              <li>
                <a href="http://demo.posthemes.com/pos_nevara/layout3/en/16-document">Document </a>
              </li>
                <li><a href="http://demo.posthemes.com/pos_nevara/layout3/en/17-dropcap">Dropcap </a>
              </li>
              <li>
                <a href="http://demo.posthemes.com/pos_nevara/layout3/en/18-dummy-image">Dummy Image </a>
              </li>
              <li>
                <a href="http://demo.posthemes.com/pos_nevara/layout3/en/19-dummy-text">Dummy Text </a>
              </li>
              <li>
                <a href="http://demo.posthemes.com/pos_nevara/layout3/en/20-fancy-text">Fancy Text </a>
              </li>
            </ul>
              <span className="grower"><a href="javascript:void(0)"></a></span>
          </li>
        </ul>                                            
      </li>  
    </ul>
  </div>
</div>
</div>
</div>
</div>
)

export default IndexPage
