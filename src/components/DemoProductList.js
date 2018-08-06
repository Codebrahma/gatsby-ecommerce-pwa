import React from 'react'
import DemoProductCard from './DemoProductCard';
import _ from 'lodash';
import PropTypes from 'prop-types';

const DemoProductList = ({products}) => (
  <div className="demo-product-list">
    {
      _.map( products, ({ node }, index) => (
        <DemoProductCard 
            key={index} 
            productId={node.id} 
            productName={node.title}
            productImage={node.images[0] ? node.images[0].originalSrc : require('../utils/images/default.jpeg')}
            price={node.priceRange.minVariantPrice.amount}
        />
      ))
    }
  </div>
)

DemoProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DemoProductList