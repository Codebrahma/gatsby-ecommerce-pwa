import React from 'react';
import {
  Absolute, Caps, Flex, Box,
} from 'rebass';
import styled from 'styled-components';
import {
  fontSize,
  space,
  lineHeight,
  fontWeight,
  letterSpacing,
  top,
  maxWidth,
  maxHeight,
  display,
  boxShadow,
  background,
  minWidth,
} from 'styled-system';
import DropdownLink from './DropdownLink';
import angleDown from '../../../../assets/icons/angle-double-down-solid.svg';

const DropDownBox = styled.div`
  ${fontSize}
  ${space}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  ${top}
  ${minWidth}
  &:hover {
    color: rgb(245, 124, 0)
  }
`;

const DownIcon = styled.img`
  ${maxWidth}
  ${maxHeight}
  ${space}
`;

const DropDownMenu = styled.div`
  ${display}
  ${lineHeight}
  ${boxShadow}
  ${space}
  ${background}
  ${minWidth}
`;

const toggleDropdown = () => {
  document.querySelector('#interest-dropdown > div > .dropdown-menu').style.display = 'none';
};

const showDropdown = () => {
  document.querySelector('#interest-dropdown > div > .dropdown-menu').style.display = 'block';
};

const DropDown = () => (
  <DropDownBox fontSize="0.7em" lineHeight="2em" minWidth="fit-content" p="1.5%" fontWeight={400} letterSpacing="0.05em" id="interest-dropdown" onMouseEnter={showDropdown} onMouseLeave={toggleDropdown} style={{ cursor: 'pointer' }}>
    <Flex>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <Caps>
          more
        </Caps>
      </Box>
      <Box>
        <DownIcon src={angleDown} alt="angleDown" width="7px" height="10px" m={2} />
      </Box>
    </Flex>
    <Absolute zIndex="2">
      <DropDownMenu className="dropdown-menu" p={3} display="none" lineHeight={1} boxShadow="1px 2px 4px 1px rgba(0, 0, 0, 0.5)" background="white" minWidth="fit-content">
        <DropdownLink onClick={toggleDropdown} linkTo="skin-and-hair-plan" title="Skin and Hair" />
        <DropdownLink onClick={toggleDropdown} linkTo="skin-care-plan" title="skin care" />
        <DropdownLink onClick={toggleDropdown} linkTo="smoothie" title="smoothies" />
        <DropdownLink onClick={toggleDropdown} linkTo="others" title="other" />
      </DropDownMenu>
    </Absolute>
  </DropDownBox>
);

export default DropDown;
