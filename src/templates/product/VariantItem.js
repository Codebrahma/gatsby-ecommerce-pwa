import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

const VariantItem = ({ isActive, activeVariant, variantItem }) => (
  <li>
    <Button
      classes={`variant-btn ${isActive ? 'variant-active' : ''}`}
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
