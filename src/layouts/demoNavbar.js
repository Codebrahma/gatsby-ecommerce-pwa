import React from 'react';
import Link from 'gatsby-link';
import './demostyle.scss';
import logo from '../components/img/nevara-responsive-prestashop-theme-logo-1525346533.jpg'

const DemoNavbar = (props) => (
    <div className="nav-container">
        <div id="brand-logo" className="header_logo col-left col col-lg-3 col-md-12 col-xs-12">
            <Link to="/">
                <img className="logo img-responsive" src={logo} />
            </Link>
        </div>
        <div className="nav-inner" style={{ height: '1.5em' }}>
            <div id="pt_custommenu" className="pt_custommenu">
                <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
                    <div className="parentMenu">
                        <div id="interest-dropdown" >Interest
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to='/weightloss'>Weight Loss</Link>
                            <Link className="dropdown-item" to="/breakfast">Breakfast</Link>
                            <Link className="dropdown-item" to="/lunch">Lunch</Link>
                            <Link className="dropdown-item" to="/dinner">Dinner</Link>
                            <Link className="dropdown-item" to="/skinandhair">Skin and Hair</Link>
                            <Link className="dropdown-item" to="/skincare">Skin Care</Link>
                            <Link className="dropdown-item" to="/smoothies">Smoothies</Link>
                            <Link className="dropdown-item" to="/other">Other</Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
                    <div className="parentMenu">
                        <Link id="link-style" exact to="/furnitures" activeClassName="menu-active">Collections</Link>
                    </div>
                </div>
                <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
                    <div className="parentMenu">
                        <Link id="link-style" exact to="/lighting" activeClassName="menu-active">Meal Programs</Link>
                    </div>
                </div>
                <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
                    <div className="parentMenu">
                        <Link id="link-style" exact to="/products" activeClassName="menu-active">Keto products</Link>
                    </div>
                </div>
                <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
                    <div className="parentMenu">
                        <Link id="link-style" exact to="/blog" activeClassName="menu-active">blog</Link>
                    </div>
                </div>
                <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
                    <div className="parentMenu">
                        <Link id="link-style" exact to="/growtv" activeClassName="menu-active">grow tv</Link>
                    </div>
                </div>
                <div style={{ display: 'inline-block' }} >
                    <div id="pt_menu12" className="pt_menu nav-3 nav-right-items">
                        <div className="parentMenu">
                            <span className="fontcustom2">
                                <Link id="link-style-right" to="/">
                                    Cart(
                                    {
                                        props.cartLength || 0
                                    }
                                    )
                            </Link>
                            </span>
                        </div>
                    </div>
                    <div id="pt_menu12" className="pt_menu nav-3 nav-right-items">
                        <div className="parentMenu">
                            <span className="fontcustom2">
                                <Link id="link-style-right" to="/" >
                                    <i className="fas fa-search" id="search-icon" />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div id="pt_menu12" className="pt_menu nav-3 nav-right-items">
                        <div className="parentMenu">
                            <span className="fontcustom2">
                                <Link id="link-style-right" to="/" >
                                    <i className="fas fa-th-large" id="menu-icon" />
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default DemoNavbar;