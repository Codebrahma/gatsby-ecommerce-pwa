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
`;

const DropdownLink = ({ linkTo, title }) => (
  <Box my={3}>
    <DropDownItem fontSize="1em" fontWeight={400}>
      <Caps>
        <GatsbyLink className="dropdown-item" to={`/category/${linkTo}`}>
          {title}
        </GatsbyLink>
      </Caps>
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
