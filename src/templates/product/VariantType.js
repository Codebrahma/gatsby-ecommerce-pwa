import React from 'react';
import PropTypes from 'prop-types';

const VariantType = ({ variantType }) => (
  <span id="variant-title">
    {variantType}
  </span>
);

VariantType.propTypes = {
  variantType: PropTypes.string.isRequired,
};

export default VariantType;
