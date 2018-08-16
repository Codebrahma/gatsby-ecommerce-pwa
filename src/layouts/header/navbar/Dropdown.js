import React from 'react';
import { Absolute } from 'rebass';
import DropdownLink from './DropdownLink';
import angleDown from '../../../assets/icons/angle-double-down-solid.svg';

const toggleDropdown = () => {
  document.querySelector('#interest-dropdown > .dropdown-menu').style.display = 'none';
};

const showDropdown = () => {
  document.querySelector('#interest-dropdown > .dropdown-menu').style.display = 'block';
};

const DropDown = () => (
  <div id="interest-dropdown" onMouseEnter={showDropdown} onMouseLeave={toggleDropdown}>
    more
    <img src={angleDown} className="icon" alt="angleDown" style={{ maxWidth: '7px', maxHeight: '10px', margin: '0 5px' }} />
    <Absolute bg="white" zIndex="2" className="dropdown-menu" px={2}>
      <DropdownLink onClick={toggleDropdown} linkTo="skin-and-hair-plan" title="Skin and Hair" />
      <DropdownLink onClick={toggleDropdown} linkTo="skin-care-plan" title="skin care" />
      <DropdownLink onClick={toggleDropdown} linkTo="smoothie" title="smoothies" />
      <DropdownLink onClick={toggleDropdown} linkTo="others" title="other" />
    </Absolute>
  </div>
);

export default DropDown;
