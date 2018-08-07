import React from 'react'
import ProductCard from './ProductCard';
import _ from 'lodash';
import PropTypes from 'prop-types';

const ProductList = ({products}) => (
  <div className="demo-product-list">
    {
      _.map( products, ({ node }, index) => (
        <ProductCard 
            key={index} 
            productId={node.id} 
            productName={node.title}
            description={node.description}
            productImage={node.images[0] ? node.images[0].originalSrc : require('../assets/images/default.jpeg')}
            price={node.priceRange.minVariantPrice.amount}
        />
      ))
    }
  </div>
)

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductList