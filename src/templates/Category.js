import React from 'react';
import PropTypes from 'prop-types';
import { Container, Caps } from 'rebass';

import ProductList from './category/ProductList';
import Layout from '../components/layout';

const Categories = (props) => {
  const { pageContext } = props;
  return (
    <Layout>
      <Container px={0} maxWidth="90%" mt={4}>
        <Caps fontSize={2} textAlign="center">
          {`${pageContext.productType} collection`}
        </Caps>
        <ProductList
          products={pageContext.products}
        />
      </Container>
    </Layout>
  );
};

Categories.propTypes = {
  pageContext: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Categories;
