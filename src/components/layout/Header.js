import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { boxShadow } from 'styled-system';

import Navbar from './header/Navbar';
import NavbarMobile from './header/NavbarMobile';

import './header/style.scss';

const HeaderWrapper = styled.header`
  ${boxShadow}
`;

const Header = ({ cartLength, headPath }) => (
  <HeaderWrapper boxShadow="0px 1px 5px 0 rgba(0, 0, 0, 0.2)">
    <Navbar cartLength={cartLength} />
    <NavbarMobile
      headPath={headPath}
      cartLength={cartLength}
    />
  </HeaderWrapper>
);

Header.propTypes = {
  cartLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  headPath: PropTypes.string.isRequired,
};

Header.defaultProps = {
  cartLength: 0,
};

export default Header;
