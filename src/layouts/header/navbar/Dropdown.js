import React from 'react';

import DropdownLink from './DropdownLink';

import angleDown from '../../../assets/icons/angle-double-down-solid.svg'

const toggleDropdown = () => {
    document.querySelector("#interest-dropdown > .dropdown-menu").style.display = 'none'
}

const showDropdown = () => {
    document.querySelector("#interest-dropdown > .dropdown-menu").style.display = 'block'
}

const DropDown = () => (
    <div id="pt_menu10" className="pt_menu nav-1 nav-left-items">
        <div className="parentMenu">
            <div id="interest-dropdown" onMouseEnter={showDropdown} onMouseLeave={toggleDropdown}>more
                            <img src={angleDown} className="icon" alt="icon" style={{ maxWidth: "7px", maxHeight: "10px", margin: "0 5px" }} />
                <div className="dropdown-menu">
                    <DropdownLink onClick={toggleDropdown}  linkTo="skin-and-hair-plan" title="Skin and Hair" />
                    <DropdownLink onClick={toggleDropdown}  linkTo="skin-care-plan" title="skin care" />
                    <DropdownLink onClick={toggleDropdown} linkTo="smoothie" title="smoothies" />
                    <DropdownLink onClick={toggleDropdown} linkTo="others" title="other" />
                </div>
            </div>
        </div>
    </div>
)

export default DropDown;