import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

const ProductList = props => (
  <div className="demo-product-list">
    {_.map(props.products, ({ node }, index) => (
      <ProductCard
        key={index}
        productId={node.id}
        productName={node.title}
        description={node.description}
        images={node.images}
        productPrice={node.priceRange.minVariantPrice.amount}
        addCardToCart={props.addCardToCart}
      />
    ))}
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
