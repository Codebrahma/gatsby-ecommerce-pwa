import React from 'react';
import Link from 'gatsby-link';
import '../assets/styles/style.scss';
import logo from '../components/img/logo-new.png'
import search from '../assets/icons/search-solid.svg'
import angleDown from '../assets/icons/angle-double-down-solid.svg'

const toggleDropdown = () => {
    document.querySelector("#interest-dropdown > .dropdown-menu").style.display = 'none'
}

const showDropdown = () => {
    document.querySelector("#interest-dropdown > .dropdown-menu").style.display = 'block'
}

const NavLink = (props) => (
    <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
        <div className="parentMenu">
            <Link id="link-style"  exact to={`/category/${props.linkTo}`} activeClassName="demo-active-link">{props.title}</Link>
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
                            <img src={angleDown} className="icon" alt="icon" style={{maxWidth: "7px",maxHeight: "10px", margin: "0 5px"}}/>
                <div className="dropdown-menu">
                    <DropdownLink linkTo="skin-and-hair-plan" title="Skin and Hair" />
                    <DropdownLink linkTo="skin-care-plan" title="skin care" />
                    <DropdownLink linkTo="smoothie" title="smoothies" />
                    <DropdownLink linkTo="others" title="other" />
                </div>
            </div>
        </div>
    </div>
)

const Navbar = (props) => (
    <div className="nav-container">
        <div id="brand-logo" className="header_logo col-left col col-lg-3 col-md-12 col-xs-12">
            <Link to="/">
                <img className="logo img-responsive" src={logo} alt="logo"/>
            </Link>
        </div>
        <div className="col col-lg-9 col-md-12 col-xs-12" style={{marginTop: '0.6%', float: 'right'}}>
            <div id="pt_custommenu" className="pt_custommenu">
                <NavLink title="diet plan" linkTo="diet-plan" />
                <NavLink title="breakfast" linkTo="breakfast" />
                <NavLink title="lunch" linkTo="lunch" />
                <NavLink title="Dinner" linkTo="dinner" />
                <DropDown />
                <div style={{ display: 'inline-block', float: 'right'}} >
                    <NavLinkRight linkTo="/cart">
                        Cart({props.cartLength || 0})
                        </NavLinkRight>
                    <NavLinkRight linkTo="/">
                        <img src={search} className="icon" alt="icon" />
                    </NavLinkRight>
                </div>
            </div>
        </div >
    </div >
)

export default Navbar;