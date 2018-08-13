import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

const VariantItem = ({ isActive, activeVariant, variantItem }) => (
  <li>
    <Button
      classes={`btn btn-light ${isActive ? 'variant-active' : ''}`}
      handleClick={activeVariant}
      buttonText={variantItem}
    />
  </li>
);

VariantItem.propTypes = {
  variantItem: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  activeVariant: PropTypes.func.isRequired,
};

export default VariantItem;
