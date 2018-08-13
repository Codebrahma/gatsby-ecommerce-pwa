import React from 'react';

import NavLink from '../../components/Navlink';
import DropDown from './navbar/Dropdown';
import { Row, Column } from "rebass";

import logo from '../../assets/images/logo-new.png'
import search from '../../assets/icons/search-solid.svg'


const Navbar = (props) => (
    <div className="nav-container">
        <Row>
            <Column mb={0}>
                <div id="brand-logo" className="header_logo">
                    <NavLink linkTo="/" noActive>
                        <img className="logo img-responsive" src={logo} alt="logo" />
                    </NavLink>
                </div>
            </Column>
            <Column mb={0}>
                <Row px={0}>
                    <Column mb={0}>
                        <div id="pt_custommenu" className="pt_custommenu">
                            <NavLink title="diet plan" linkTo="/category/diet-plan" position="left" />
                            <NavLink title="breakfast" linkTo="/category/breakfast" position="left" />
                            <NavLink title="lunch" linkTo="/category/lunch" position="left" />
                            <NavLink title="Dinner" linkTo="/category/dinner" position="left" />
                            <DropDown />
                        </div>
                    </Column>
                    <Column pt={3} px={5} mb={0}>
                        <div style={{ display: 'inline-block', float: 'right' }} >
                            <NavLink linkTo="/cart" title={`Cart(${props.cartLength || 0})`} position="right" />
                            <NavLink linkTo="/" position="right" noActive>
                                <img src={search} className="icon" alt="search" />
                            </NavLink>
                        </div>
                    </Column>
                </Row>
            </Column>
        </Row >
    </div>
)

export default Navbar;