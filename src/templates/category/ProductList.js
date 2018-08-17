import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import ProductCard from './ProductCard';

const ProductList = ({ products, addCardToCart }) => (
  <Flex flexWrap="wrap" mt={2}>
    {_.map(products, ({ node }, index) => (
      <ProductCard
        key={index}
        productId={node.id}
        productName={node.title}
        description={node.description}
        images={node.images}
        productPrice={node.priceRange.minVariantPrice.amount}
        addCardToCart={addCardToCart}
      />
    ))}
  </Flex>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCardToCart: PropTypes.func.isRequired,
};

export default ProductList;
