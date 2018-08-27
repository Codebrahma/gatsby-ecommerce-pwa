import React from 'react';
import { Container, Caps } from 'rebass';
import Layout from '../components/layout';
import ProductList from '../components/ProductList';

export default class CategoryList extends React.Component {
  render() {
    const { productsInCategory, categoryName, addProductToCart } = this.props;
    return (
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
  }
}
