import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropType from 'prop-types';

const DropdownLink = ({ linkTo, title }) => (
  <GatsbyLink className="dropdown-item" to={`/category/${linkTo}`}>
    {title}
  </GatsbyLink>
);

DropdownLink.propTypes = {
  linkTo: PropType.string.isRequired,
  title: PropType.string,
};

DropdownLink.defaultProps = {
  title: 'Dropdown default link',
};

export default DropdownLink;
