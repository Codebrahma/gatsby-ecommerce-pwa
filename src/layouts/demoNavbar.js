import React from 'react';
import Link from 'gatsby-link';
import './demostyle.scss';
import logo from '../components/img/logo-new.png'

const toggleDropdown = () => {
    document.querySelector("#interest-dropdown > .dropdown-menu").style.display = 'none'
}

const showDropdown = () => {
    document.querySelector("#interest-dropdown > .dropdown-menu").style.display = 'block'
}

const NavLink = (props) => (
    <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
        <div className="parentMenu">
            <Link id="link-style" exact to={`/category/${props.linkTo}`}>{props.title}</Link>
        </div>
    </div>
)

const NavLinkRight = (props) => (
    <div id="pt_menu12" className="pt_menu nav-3 nav-right-items">
        <div className="parentMenu">
            <span className="fontcustom2">
                <Link id="link-style-right" to={props.linkTo} >
                    {props.children}
                </Link>
            </span>
        </div>
    </div>
)

const DropdownLink = (props) => (
    <Link onClick={toggleDropdown} className="dropdown-item" to={`/category/${props.linkTo}`}>{props.title}</Link>
)

const DropDown = () => (
    <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
        <div className="parentMenu">
            <div id="interest-dropdown" onMouseEnter={showDropdown} onMouseLeave={toggleDropdown}>more
                            <i className="fa fa-angle-double-down"></i>
                <div className="dropdown-menu">
                    <DropdownLink linkTo="skin-care-plan" title="skin care" />
                    <DropdownLink linkTo="smoothie" title="smoothies" />
                    <DropdownLink linkTo="others" title="other" />
                </div>
            </div>
        </div>
    </div>
)

const DemoNavbar = (props) => (
    <div className="nav-container">
        <div id="brand-logo" className="header_logo col-left col col-lg-3 col-md-12 col-xs-12">
            <Link to="/">
                <img className="logo img-responsive" src={logo} />
            </Link>
        </div>
        <div className="nav-inner" style={{ height: '1.5em' }}>
            <div id="pt_custommenu" className="pt_custommenu">
                <NavLink title="Weight Loss" linkTo="diet-plan" />
                <NavLink title="breakfast" linkTo="breakfast" />
                <NavLink title="lunch" linkTo="lunch" />
                <NavLink title="Dinner" linkTo="dinner" />
                <NavLink title="Skin and Hair" linkTo="skin-and-hair-plan" />
                <DropDown />
                <div style={{ display: 'inline-block' }} >
                    <NavLinkRight linkTo="/">
                        Cart({props.cartLength || 0})
                        </NavLinkRight>
                    <NavLinkRight linkTo="/">
                        <i className="fas fa-search" id="search-icon" />
                    </NavLinkRight>
                    <NavLinkRight linkTo="/">
                        <i className="fas fa-th-large" id="menu-icon" />
                    </NavLinkRight>
                </div>
            </div>
        </div >
    </div >
)

export default DemoNavbar;