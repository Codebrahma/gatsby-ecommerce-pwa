import React from 'react';
import PropTypes from 'prop-types';
import { Text, Box } from 'rebass';

const VariantItem = ({ isActive, activeVariant, variantItem }) => (
  <Box
    m={2}
    p={15}
    bg={isActive ? '#000' : '#f5f5f5'}
    onClick={activeVariant}
    style={{ borderRadius: '5px', cursor: 'pointer' }}
    color={isActive ? '#f5f5f5' : '#000'}
  >
    <Text
      fontSize={14}
      fontWeight={500}
    >
      {variantItem}
    </Text>
  </Box>
);

VariantItem.propTypes = {
  variantItem: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  activeVariant: PropTypes.func.isRequired,
};

export default VariantItem;
