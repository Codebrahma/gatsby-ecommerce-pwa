import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropType from 'prop-types';
import { Row, Column } from 'rebass';

const DropdownLink = ({ linkTo, title }) => (
  <Row px={2}>
    <Column my={3}>
      <GatsbyLink className="dropdown-item" to={`/category/${linkTo}`}>
        {title}
      </GatsbyLink>
    </Column>
  </Row>
);

DropdownLink.propTypes = {
  linkTo: PropType.string.isRequired,
  title: PropType.string,
};

DropdownLink.defaultProps = {
  title: 'Dropdown default link',
};

export default DropdownLink;
