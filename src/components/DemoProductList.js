import React from 'react'
import DemoProductCard from './DemoProductCard';
import _ from 'lodash';
import PropTypes from 'prop-types';

const DemoProductList = ({products}) => (
  <div className="demo-product-list">
    {
      _.map(products, product => (
        <DemoProductCard 
            key={product.productId} 
            productId={product.productId} 
            productName={product.productName}
            productImage={product.productImage}
            price={product.price}
        />
      ))
    }
  </div>
)

DemoProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DemoProductList