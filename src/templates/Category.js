import React from 'react';
import PropTypes from 'prop-types';
import { Container, Caps } from 'rebass';

import ProductList from './category/ProductList';

import './category/category.scss';
import Layout from '../components/layout';

const Categories = (props) => {
  const { pageContext, addItemToCart } = props;
  return (
    <Layout>
      <Container px={0} maxWidth="90%" mt={4}>
        <Caps fontSize={2} textAlign="center">
          {`${pageContext.productType} collection`}
        </Caps>
        <ProductList
          products={pageContext.products}
          addCardToCart={addItemToCart}
        />
      </Container>
    </Layout>
  );
};

Categories.propTypes = {
  pageContext: PropTypes.oneOfType([PropTypes.object]).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default Categories;
