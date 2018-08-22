import React from 'react';
import PropTypes from 'prop-types';
import { Subhead } from 'rebass';

const VariantType = ({ variantType }) => (
  <Subhead fontSize={18} mb={2}>
    {variantType}
  </Subhead>
);

VariantType.propTypes = {
  variantType: PropTypes.string.isRequired,
};

export default VariantType;
