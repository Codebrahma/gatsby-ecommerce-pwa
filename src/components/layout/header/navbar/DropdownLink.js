import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropType from 'prop-types';
import { Box, Caps } from 'rebass';
import styled from 'styled-components';
import { fontSize, fontWeight } from 'styled-system';
import { letterSpacing } from 'styled-system/dist/styles';

const DropDownItem = styled.div`
  ${fontSize},
  ${letterSpacing},
  ${fontWeight}
  a {
    color: #000
    text-decoration: none
    white-space: nowrap
    &:hover {
      color: rgb(245, 124, 0);
    }
  }
`;

const DropdownLink = ({ linkTo, title }) => (
  <Box my={3}>
    <DropDownItem fontSize="1em" fontWeight={400} letterSpacing="0.05em">
      <GatsbyLink to={`/category/${linkTo}`}>
        <Caps color="">
          {title}
        </Caps>
      </GatsbyLink>
    </DropDownItem>
  </Box>
);

DropdownLink.propTypes = {
  linkTo: PropType.string.isRequired,
  title: PropType.string,
};

DropdownLink.defaultProps = {
  title: 'Dropdown default link',
};

export default DropdownLink;
