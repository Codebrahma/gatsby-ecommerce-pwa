import React from 'react';
import ProductList from './ProductList';
import './products-list.scss'; 

export default ({ categoryName, productsInCategory, applyFilter }) => {
  return(
    <div className="container demo-container">
      <div className="row">
          <div className="demo-product-collection">
              <div className="demo-product-collection-header">
                  <p>{`${categoryName} collection`}</p>
              </div>
              <button onClick={applyFilter}>Apply filter</button>
              <ProductList products={productsInCategory} />
          </div>
      </div>
  </div>
  )
}
