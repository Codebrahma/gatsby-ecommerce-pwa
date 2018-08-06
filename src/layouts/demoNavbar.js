import React from 'react';
import Link from 'gatsby-link';
import './demostyle.scss';
import logo from '../components/img/logo-new.png'


const DemoNavbar = (props) => {

    const toggleDropdown = () => {
        document.querySelector("#interest-dropdown > .dropdown-menu").style.display = 'none'
    }

    const showDropdown = () => {
        document.querySelector("#interest-dropdown > .dropdown-menu").style.display = 'block'
    }
    return (
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
                            <Link id="link-style" exact to="/category/diet-plan" activeClassName="menu-active">Weight Loss</Link>
                        </div>
                    </div>
                    <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
                        <div className="parentMenu">
                            <Link id="link-style" activeClassName="menu-active" exact to="/category/breakfast">Breakfast</Link>
                        </div>
                    </div>
                    <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
                        <div className="parentMenu">
                            <Link id="link-style" activeClassName="menu-active" exact to="/category/lunch">Lunch</Link>
                        </div>
                    </div>
                    <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
                        <div className="parentMenu">
                            <Link id="link-style" activeClassName="menu-active" exact to="/category/dinner">Dinner</Link>
                        </div>
                    </div>
                    <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
                        <div className="parentMenu">
                            <Link id="link-style" activeClassName="menu-active" exact to="/category/skin-and-hair-plan">Skin and Hair</Link>
                        </div>
                    </div>
                    <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
                        <div className="parentMenu">
                            <div id="interest-dropdown" onMouseEnter={showDropdown} onMouseLeave={toggleDropdown}>more
                            <i className="fa fa-angle-double-down"></i>
                                <div className="dropdown-menu">
                                    <Link onClick={toggleDropdown} className="dropdown-item" to="/category/skin-care-plan">Skin Care</Link>
                                    <Link onClick={toggleDropdown} className="dropdown-item" to="/category/smoothie">Smoothies</Link>
                                    <Link onClick={toggleDropdown} className="dropdown-item" to="/category/others">Other</Link>
                                </div>
                            </div>
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
}

export default DemoNavbar;