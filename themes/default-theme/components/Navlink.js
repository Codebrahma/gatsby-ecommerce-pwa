import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontSize,
  letterSpacing,
  fontWeight,
  lineHeight,
  color,
  textDecoration,
  maxWidth,
  borderBottom,
  textTransform,
  minHeight,
  space,
} from 'styled-system';
import { minWidth } from 'styled-system/dist/styles';

const StyledLink = styled.span`
  ${fontSize}
  ${letterSpacing}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${textDecoration}
  ${maxWidth}
  ${minWidth}
  ${borderBottom}
  ${textTransform}
  ${minHeight}
  ${space}
  &:hover {
    color: rgb(245, 124, 0);
}
`;

const NavLink = ({
  linkTo,
  children,
  title,
  noActive,
}) => (
  <GatsbyLink
    to={linkTo}
    activeStyle={noActive ? {} : { borderBottom: '2px solid rgba(245, 124, 0, 1)', color: 'rgb(245, 124, 0)' }}
    style={{
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: '#000',
      whiteSpace: 'nowrap',
      borderBottom: '2px solid rgba(245, 124, 0, 0)',
    }}
  >
    <StyledLink
      minWidth="100%"
      fontSize="1.1em"
      letterSpacing="0.05em"
      fontWeight="400"
      lineHeight="50px"
      maxHeight="10px"
      p="2.5em"
    >
      {children || title}
    </StyledLink>
  </GatsbyLink>
);

NavLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.element,
  noActive: PropTypes.bool,
};

NavLink.defaultProps = {
  title: 'Navlink default title',
  children: null,
  noActive: false,
};

export default NavLink;
