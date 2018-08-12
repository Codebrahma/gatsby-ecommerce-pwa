import React from 'react';

import NavLink from '../../components/Navlink';
import DropDown from './navbar/Dropdown';

import logo from '../../assets/images/logo-new.png'
import search from '../../assets/icons/search-solid.svg'


const Navbar = (props) => (
    <div className="nav-container">
        <div id="brand-logo" className="header_logo col-left col col-lg-3 col-md-12 col-xs-12">
            <NavLink linkTo="/" noActive>
                <img className="logo img-responsive" src={logo} alt="logo" />
            </NavLink>
        </div>
        <div className="col col-lg-9 col-md-12 col-xs-12" style={{ marginTop: '0.6%', float: 'right' }}>
            <div id="pt_custommenu" className="pt_custommenu">
                <NavLink title="diet plan" linkTo="/category/diet-plan" position="left"/>
                <NavLink title="breakfast" linkTo="/category/breakfast" position="left"/>
                <NavLink title="lunch" linkTo="/category/lunch" position="left"/>
                <NavLink title="Dinner" linkTo="/category/dinner" position="left"/>
                <DropDown />
                <div style={{ display: 'inline-block', float: 'right' }} >
                    <NavLink linkTo="/cart" title={`Cart(${props.cartLength || 0})`} position="right"/>
                    <NavLink linkTo="/" position="right" noActive>
                        <img src={search} className="icon" alt="icon" />
                    </NavLink>
                </div>
            </div>
        </div >
    </div >
)

export default Navbar;