import React from 'react';
import GatsbyLink from 'gatsby-link';
import PropType from 'prop-types';

const DropdownLink = (props) => (
    <GatsbyLink className="dropdown-item" to={`/category/${props.linkTo}`}>{props.title}</GatsbyLink>
)

DropdownLink.propTypes = {
    linkTo: PropType.string.isRequired,
    title: PropType.string
}

DropdownLink.defaultProps = {
    title: "Dropdown default link"
}

export default DropdownLink;