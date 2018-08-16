import React from 'react';
import PropTypes from 'prop-types';
import { Container, Caps } from 'rebass';

import ProductList from './category/ProductList';

import './category/category.scss';

const Categories = (props) => {
  const { pathContext, addItemToCart } = props;
  return (
    <Container px={0} maxWidth="90%" mt={4}>
      <Caps fontSize={2} textAlign="center">
        {`${pathContext.productType} collection`}
      </Caps>
      <ProductList
        products={pathContext.products}
        addCardToCart={addItemToCart}
      />
    </Container>
  );
};

Categories.propTypes = {
  pathContext: PropTypes.oneOfType([PropTypes.object]).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default Categories;
