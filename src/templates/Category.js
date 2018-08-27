import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import Category from 'theme/components/CategoryList';

const addProductToCart = (product, purchaseQuantity) => {
  const currentCartItems = JSON.parse(localStorage.getItem('cart')) || {};
  const toBeAddedProduct = {
    ...product,
    purchaseQuantity,
  };
  currentCartItems[toBeAddedProduct.productId] = toBeAddedProduct;
  localStorage.setItem('cart', JSON.stringify(currentCartItems));
  window.dispatchEvent(new CustomEvent('localstorage update'));
};

const Categories = ({ pageContext }) => (
  <Category
    categoryName={pageContext.productType}
    productsInCategory={pageContext.products}
    addProductToCart={addProductToCart}
  />
);

Categories.propTypes = {
  pageContext: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Categories;
