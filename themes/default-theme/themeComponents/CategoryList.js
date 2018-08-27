import React from 'react';
import { Container, Caps } from 'rebass';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import ProductList from '../components/ProductList';

const Category = ({ productsInCategory, categoryName, addProductToCart }) => (
  <Layout>
    <Container px={0} maxWidth="90%" mt={4}>
      <Caps fontSize={2} textAlign="center">
        {`${categoryName} collection`}
      </Caps>
      <ProductList
        products={productsInCategory}
        onAddToCartClick={addProductToCart}
      />
    </Container>
  </Layout>
);

Category.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  productsInCategory: PropTypes.array.isRequired,
  categoryName: PropTypes.string.isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default Category;
