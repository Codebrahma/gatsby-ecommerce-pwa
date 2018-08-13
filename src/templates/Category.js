import React from 'react';
import PropTypes from 'prop-types';

import ProductList from './category/ProductList';

import './category/category.scss';

const Categories = (props) => {
  const { pathContext, addItemToCart } = props;
  return (
    <div className="container demo-container">
      <div className="row">
        <div className="demo-product-collection">
          <div className="demo-product-collection-header">
            <p>
              {`${pathContext.productType} collection`}
            </p>
          </div>
          <ProductList
            products={pathContext.products}
            addCardToCart={addItemToCart}
          />
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  pathContext: PropTypes.oneOfType([PropTypes.object]).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default Categories;
