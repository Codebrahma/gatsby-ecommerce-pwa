import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropType from 'prop-types';
import { Box } from 'rebass';

const DropdownLink = ({ linkTo, title }) => (
  <Box my={3}>
    <GatsbyLink className="dropdown-item" to={`/category/${linkTo}`}>
      {title}
    </GatsbyLink>
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
