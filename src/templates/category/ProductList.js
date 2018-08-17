import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
  <Flex flexWrap="wrap" mt={2}>
    {_.map(products, ({ node }, index) => (
      <ProductCard
        key={index}
        productId={node.id}
        productName={node.title}
        description={node.description}
        images={node.images}
        productPrice={node.priceRange.minVariantPrice.amount}
      />
    ))}
  </Flex>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
